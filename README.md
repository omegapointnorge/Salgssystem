# -- Salgssystem --

Et visuelt verktøy for utviklet for salgsavdelingen i ITverket for at de skal letter holde oversikt over pågående og utførte caser.

Denne README-en er ment som en støtte til nåværende og fremtidige utviklere av systemet.

## Nyttige lenker
[Slack kanal](https://app.slack.com/client/T043H77SE/G01MY9WP57Z)

[GitHub](https://github.com/itverket/Salgssystem)

Når du har tilgang fra ITverket admin vil du kunne se prosjektet hos:
[AWS](https://eu-central-1.console.aws.amazon.com/amplify/home?region=eu-central-1#/dwf84vda9juvi)

## Teknologi

### Arkitektur
React app hostet gjennom AWS Amplify. 

### AWS Amplify (Backend)
- DynamoDB -> No SQL database basert på JSON input
- Appsync - hoster GraphQL API-et til prosjektet
- GraphQL - hente og lagre data i databasen

### ReactJS (Frontend)
Vi bruker React for å bygge brukergrensesnittet.

## Features
### Real time updates via AWS App sync
For å håndere at flere brukere benytter systemet samtidig benyttes AWS app sync subscriptions for å håndtere dette. Her lytter man til GraphQL endepunktene og dupliserer handlingen hos hver client.
### Drag-and-drop
Todo ved behov.

# Brukerveiledning

## Lokal innstallasjon og kjøring
Last ned AWS [Amplify CLI](https://docs.amplify.aws/cli/start/install).
For å benytte CLI må AWS admin tildele et access og secret key. Kjør følgende kommando fra prosjektets root:
```bash
amplify configure
```
Fyll inn `access key` og region `eu-central-1`.
Etter dette kjør:
```bash
amplify pull
```
Velg alle standardinstillinger.

Kjør følgende kommando for å se om det funker:
```
amplify status
```

Nå skal alt være klart for å kjøre prosjetket lokalt. 
For å kjøre prosjektet lokalt må client kjøres opp.
Fra root kjør:
```bash
npm install
```
Deretter kjør:
```bash
npm start
```

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

## Endre datamodell
Gjøres i `schema.graphql`.
### Eksempel 1: Nytt modellobjekt:
- Opprett en ny type i `schema.graphql`, annoter den med `@model` om man ønser å autogenerere `CRUD-operasjoner` og tilhørende resolvers. Husk `@aws_api_key` for at autentisering skal fungere i AWS Amplify og ikke bare lokalt.
- Kjør ```amplify pull``` for å deploye endringer.
### Eksempel 2: Opprette ny operasjon:
- Opprett en ny type for operasjonen du ønsker å lage, f.eks. `Query`, `Mutation`, eller `Subscription`. Deretter lager man en ny linje under den typen hvor man definerer operasjonen sin på formen: 
```graphql
parameter navn: return type @annotasjoner F.eks.:
type Mutation {
  moveSalgsCase(input: MoveSalgsCaseInput!): SalgsCase @aws_api_key
}
```
- Deretter er det viktig å lage tilhørende `resolvers`. Man kan få hjelp til å opprette en resovler fra scratch ved amplify console på nett i form av templates og autocomplete. Når man har opprettet denne er det lurt å lagre denne koden i git slik at dette ikke trenger å oppdateres for hver gang man kjører `amplify pull`. Disse filene legges under `./amplify/backend/api/salgssystem/resolvers`. 
- Filene skal ha formatet: `Operasjonstype.operasjonsNavn.[res/req].vtl` - res eller req basert på om det er response eller request template.


## Kjente feil/utfordringer
### GraphQL API gir undefined
GraphQL operasjon mangler en resolver.
Resolver kan legge til [her](https://eu-central-1.console.aws.amazon.com/appsync/home?region=eu-central-1#/5dzlkjudvzh5roha4epxbk3swe/v1/schema). Eller den kan lages manuelt.

### GrapQL gir "no credentials", men det fungerer lokalt
AWS vet ikke hva den skal autentisere kallet med, man å legge til `@aws_api_key` på de operasjonene som gir denne feilmeldingen i `schema.graphql`.


## Bidra
Pull requests er velkomne.

## Bidragsytere
- Martin Theodor Vasbotten (fra feb 2021 - mars 2021) epost: mtv@itverket.no
- Arne O. Ose (fra feb 2021 - XX 2021) epost: ao@itverket.no


## Lisens
[ITverket](https://www.itverket.no/)