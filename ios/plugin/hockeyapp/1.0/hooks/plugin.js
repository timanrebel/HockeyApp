exports.cliVersion = '>=3.X';

var fs = require('fs');
var path = require('path');


var UIApplicationMainStatement = '  int retVal = UIApplicationMain(argc, argv, nil, @"TiApp");';

var replacementRows = [
    '    int retVal = 0;',
    '    @try {\n',
    '        retVal = UIApplicationMain(argc, argv, nil, @"TiApp");',
    '    }',
    '    @catch (NSException *e) {',
    '        //we save the exception description to NSUserDefaults, this value will be picked up at next app start by hockeyapp',
    '        [[NSUserDefaults standardUserDefaults] setObject:e.description forKey:[NSString stringWithFormat:@"%@.%@", TI_APPLICATION_ID, @"crash_info"]];',
    '        [[NSUserDefaults standardUserDefaults] synchronize];',
    '        //we need to crash here anyway for hockeyapp to notice',
    '        @throw e;',
    '    }'].join("\n");



exports.init = function(logger, config, cli, appc) {
    if (cli.argv.platform != 'android') {

        cli.addHook('build.pre.compile', function(build, finished) {
            logger.info('Replacing the populateIosFiles() function in the iOS Build plugin');
            var populateIosFiles = build.populateIosFiles;
            if (populateIosFiles) {
                build.populateIosFiles = function() {

                    var result = populateIosFiles.call(build);

                    var mainFile = path.join(this.buildDir, 'main.m');
                    var mainContents = fs.readFileSync(mainFile);
                    if (!mainContents) {
                        logger.error('Cannot find main.m in build dir');
                        process.exit(1);
                    } else {
                        var mainContentsStr = mainContents.toString();
                        var uiAppMainInvocationMatch = mainContentsStr.match(/UIApplicationMain\(argc,\sargv,\snil,\s\@\"TiApp\"\)/g);
                        if (!uiAppMainInvocationMatch) {
                            logger.error('Cannot find UIApplicationMain invocation');
                            process.exit(1);
                        }
                        //we inject the AppConnectUIApplication UIApplication subclass
                        logger.info('Modifying UIApplicationMain invocation in the generated main.m');
                        mainContentsStr = mainContentsStr.replace(UIApplicationMainStatement, replacementRows);
                        fs.writeFileSync(mainFile, mainContentsStr);
                    }

                    return result;
                };
            } else {
                logger.error('Can\'t inject hook into ios build');
                process.exit(1);
            }
            finished();
        });
    }
};
