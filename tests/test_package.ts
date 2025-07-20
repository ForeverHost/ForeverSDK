import ForeverSdk from "sdk.dev";

async function test(): Promise<string> {
	ForeverSdk.package.printVersion();
	ForeverSdk.Console.Debug("Test", ForeverSdk.package.version());
	ForeverSdk.Console.Debug("Test", ForeverSdk.package.versionCode());
	return "Test Complete";
}
test()
	.then(val => {
		console.log("\n")
		ForeverSdk.Console.Success("Test", val);
		process.exit(0);
	})
	.catch(error => {
		console.log("\n");
		ForeverSdk.Console.FatalError("Test", "Test passed: " + error);
		process.exit(1);
	});
