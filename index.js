/*
  GROK JAILBREAK V2 NODE JS
  Creator : KyynXznotDev
  Type : Module 
  Note : Kalo error itu berarti ada masalah di endpoint nya :v
*/
import rl from "readline-sync";
import chalk from "chalk";

console.log("");
console.log(chalk.red.bold("GROK JAILBREAK V2"));
console.log(chalk.white("Ketik exit untuk keluar dari obrolan"));
console.log("");
while (true) {
	const prompt = rl.question("You : ")
	if (!prompt) continue;
	if (prompt.toLowerCase() === "exit") {
		console.log(chalk.yellow("Keluar Dari Grok AI.."))
		process.exit(0)
		break;
	}
	
	const start = Date.now()
	try {
      const pler = await fetch("https://api.nekolabs.web.id/text.gen/grok/3-jailbreak/v2", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "User-Agent": "NEBL-TOOLS/1.0"
          },
          body: JSON.stringify({
            text: prompt
          })
        }
      );
	
	if (!pler.ok) {
		const errorAsu = await pler.text();
		console.log(chalk.red("❌ HTTP ERROR ", pler.status))
		console.log(chalk.gray(errorAsu.slice(0, 300)))
		continue;
	}
	
	const json = await pler.json()
	const jawab = json.result || json.response || json.answer || "Ga ada Respon nya woilah"
	const waktu = ((Date.now() - start) / 1000).toFixed(2);
	
	        console.log(`
${chalk.red.bold("GROQ JAILBREAK RESPONSE")}

${chalk.red("Groq : ")} ${chalk.white(jawab)}

${chalk.gray("Waktu    :")} ${json.timestamp}
${chalk.gray("Respon   :")} ${json.responseTime || `${waktu}ms`}
`);
	
	} catch (err) {
		console.log(chalk.red("❌ GROK NYA ERROR WOILAH"))
		console.log(chalk.gray(err.message))
	}
            }
    
