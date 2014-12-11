module.exports = function(grunt) {
	require("load-grunt-tasks")(grunt);
	grunt.loadNpmTasks("testee");
	grunt.loadNpmTasks("steal-tools");
	grunt.config.init({
		pkg: grunt.file.readJSON("package.json"),
		stealBuild: {
			default: {
				options: {
					system: {
						config: __dirname + "/stealconfig.js",
						main: "cc-hello-world",
						bundlesPath: "./dist/"
					},
					buildOptions: {
						minify: true,
						bundlesteal: grunt.option("standalone")
					}
				}
			}
		},
		connect: {
			server: {
				options: {
					hostname: "localhost",
					port: grunt.option("port") || 8125,
					debug: true
				}
			},
			test: {
				options: {
					hostname: "localhost",
					port: 3996,
					debug: true
				}
			}
		},
		testee: {
			phantom: ["test.html"]
		}
	});
	grunt.registerTask("test", ["connect:test", "testee:phantom"]);
	grunt.registerTask("serve", ["connect:server:keepalive"]);
};
