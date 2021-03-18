# -- Salgssystem --

Et visuelt verktøy for utviklet for salgsavdelingen i ITverket for at de skal letter holde oversikt over pågående og utførte caser.

Denne README-en er ment som en støtte til nåværende og fremtidige utviklere av systemet.

## Nyttige lenker
[Slack kanal](https://app.slack.com/client/T043H77SE/G01MY9WP57Z)

[GitHub](https://github.com/itverket/Salgssystem)

Når du har tilgang fra ITverket admin vil du kunne se prosjektet hos:
[AWS](https://eu-central-1.console.aws.amazon.com/codesuite/codepipeline/)

## Teknologi
### AWS
- DynamoDB -> No SQL database basert på JSON input
- Code Pipeline -> Bygger og deployer prosjektet for oss
- Elastic Beanstalk -> Holder på servermiljøet

### NodeJS - AWS oppsett
Filen `buildspec.yaml` benyttes av `Code Pipeline` til å bygge prosjektet. 

Filen `Procfile` forteller `Elastic Beanstalk` hvilken fil den skal starte på.

### ReactJS
Vi bruker React for å bygge brukergrensesnittet.

### NodeJS
NodeJs benyttes som api/backend og håndterer server kommunikasjonene med AWS.

## Lokal innstallasjon og kjøring
For å kjøre prosjektet lokalt må både server og clinet kjøres opp.
Fra root kjør:
```bash
npm install
```
Deretter kjør:
```bash
npm start
```
Gjør det samme for `./client`.


## Deploy til AWS

Push til git [Salgssystem](https://github.com/itverket/Salgssystem)

AWS pipeline vil automatisk fange opp ny merge til f.eks. master og develop branch.
Egne feature brances kan brukes for å teste brancher. Dette kan settes opp hos [AWS - Pipelines](https://eu-central-1.console.aws.amazon.com/codesuite/codepipeline/pipelines?region=eu-central-1)

## Første oppsett av AWS
1. Få bruker i AWS - hør med ansvarlig hos ITverket (per mars 2021: Salah Waisi).
2. Med adminrettigheter kan du opprette egne secret key og access key, hvis ikke må en med adminrettigheter opprette dette og dele det med deg. Dette bør sendes kryptert. IAM -> Users -> din bruker -> Security Credentials -> Create Access Key. Husk å lagre filen, du får bare sett denne en gang.
3. Last ned [AWS CLI](https://aws.amazon.com/cli/)
4. Kjør kommando: `aws configure` og følg instruksjonene med å legge inn keys. Bruk `eu-central-1` som region. Velg `JSON` som output.
5. Ferdig. Test med å starte appen og se om du kan hente fra databasen.


## Bidra
Pull requests er velkomne.


## License
[ITverket](https://www.itverket.no/)