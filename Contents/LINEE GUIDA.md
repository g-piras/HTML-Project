# LINEE GUIDA GIT
[REPO GitHub](https://github.com/KelosDev/HTML-Project.git)
***
#### Git Configuration da VSCODE
- Aprire VSCODE
- Ctrl + J per aprire il terminale
- Digitare sul terminale git clone https://github.com/KelosDev/HTML-Project.git
- Salvare la cartella (dove volete)

***
## Dal terminale
- git checkout develop (spostarsi sul branch di sviluppo)
- git checkout -b "nome_vostro_branch" (creare il vostro branch e spostarsi in esso)
- Effettuare modifiche al file/sviluppare
- git commit -am "messaggio di commit CHIARO!" (aggiunge alla staging area e effettua la commit)
- git push -u origin "nome_vostro_branch"

***
## Document guidelines

- Class, id, filenames: kebab-case english;
- Colours:
    - #ffffff (black)
    - #ff4655 (coral red)
    - #000000 (white)
- Media query breakpoints (min-width):
    - 480px
    - 576px
    - 768px
    - 992px
    - 1200px
- All pages:
    - header
    - footer
    - `secondary navigation`(?)
- Font-family: `---`
- Sections:
    - Homepage
        - home
        - news
        - about
    - Tournaments
        - `Optional` Venues
    - Players
    - Join form
    - Gallery
        - `Optional` Videos