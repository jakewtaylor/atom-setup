# prettify-laravel-boilerplate

Converts boilerplate Laravel files to my preferred styles:

Run the command `prettify-laravel-boilerplate:prettify` or use the packages menu to run the script.

## Classes

`/(class|extends|implements) +(\w+)[\s]*\{/g` -> `$1 $2 {`

```PHP
class User extends Authenticatable
{
    ...
}
```

becomes

```PHP
class User extends Authenticatable {
    ...
}
```

## Functions

`/(?:function) +(\w+) *\(([\$\w\,\=\'\"\s]*)\)\s*\{/g` -> `function $1 ($2) {`

```PHP
function index()
{
    ...
}
```

becomes

```PHP
function index () {
    ...
}
```

## DocBlocks

`/\n* *\/\*\*[\s\S]*?\*\//g` -> ``

DocBlocks (any multiline comments starting with `/**`) get removed.