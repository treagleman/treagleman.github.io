# treagleman.github.io

pull from git:
 - open terminal
 - navigate to root directory (BE SURE in correct directory)
 - git pull

push to git:
 - open terminal
 - navigate to root directory
 - type git add –A
 - type git commit –m “_____” 
 - type git push

(tag ref)[https://git-scm.com/docs/git-add]

## Notes

### Breakpoints

 {
  xs: 320px,
  sm: 480px,
  md: 768px, 
  lg: 1024px,
  xl: 1200px
 }

### Class Naming Conventions

- Block/Element/Modifier (BEM) notation

    - Block `-`
    
          .stick-man {}

    - Element `__`

          .stick-man__head {}
          .stick-man__arms {}

    - Modifier `--`
    
          .stick-man--blue {}
          .stick-man--red {}

- Use js- class names to denote a relationship to js.

      const nav = document.querySelector('.js-site-navigation')

- Don't be shy about comments

- Can use `rel` attribute to describe a relationship to another element just like with the header `<link>` tag.

      <div class="site-navigation" rel="js-site-navigation">
      </div>
      <!-- 
      And in the JavaScript: 
      -->
      const nav = document.querySelector("[rel='js-site-navigation']")

### HTML Semantics 

    <html>
    <head>
        <meta charset="utf-8" />
        <title>Title</title>
        <link href="stylesheets/main.css" rel="stylesheet" />
    </head>
    <body>
        <header>
            <hgroup>
                <h1>Header</h1>
                <h2>Subheader</h2>
            </hgroup>
        </header>
        <nav>
            <ul>
                <li><a href="#">Menu Option 1</a></li>
                <li><a href="#">Menu Option 2</a></li>
            </ul>
        </nav>
        <section>
            <article>
                <header>
                    <h1>Article #1</h1>
                </header>
                <section>
                    This is the first article.
                </section>
            </article>
            <article>
                <header>
                    <h1>Article #2</h1>
                </header>
                <section>
                    This is the second article.
                </section>
            </article>
        </section>
        <aside>
            <section>
                <h1>Links</h1>
                <ul>
                    <li><a href="#">Link 1</a></li>
                    <li><a href="#">Link 2</a></li>
                </ul>
            </section>
            <figure>
                <img width="85" height="85" 
                    src="http://domain.tld/path/to/image.jpg" 
                    alt="foobar" />
                <figcaption>Foobar</figcaption>
            </figure>
        </aside>
        <footer>Footer</footer>
    </body>
    </html>


[JSDocumentation Standards](https://developer.wordpress.org/coding-standards/inline-documentation-standards/javascript/)
