# -- Salgssystem --

Et visuelt verktøy for utviklet for salgsavdelingen i ITverket for at de skal letter holde oversikt over pågående og utførte caser.

Denne README-en er ment som en støtte til nåværende og fremtidige utviklere av systemet.

## Lokal innstallasjon og kjøring

NPM ++

```bash
npm install
```

## Deploy til AWS

Push til git [Salgssystem](https://github.com/itverket/Salgssystem)

AWS pipeline vil automatisk fange opp ny merge til f.eks. master og develop branch.
Egne feature brances kan brukes for å teste brancher. Dette kan settes opp hos [AWS - Pipelines](https://eu-central-1.console.aws.amazon.com/codesuite/codepipeline/pipelines?region=eu-central-1)

```python
import foobar

foobar.pluralize('word') # returns 'words'
foobar.pluralize('goose') # returns 'geese'
foobar.singularize('phenomena') # returns 'phenomenon'
```

## Bidra
Pull requests er velkomne.


## License
[ITverket](https://www.itverket.no/)