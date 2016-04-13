# tree-status-codes

This library contains logic to generate last two characters for tree status.
Example:
> var TreeStatus = require('tree-status-codes');
>
> var assigned = 'AA';
>
> var dog = 'AB';
>
> // To generate status code use
> TreeStatus.mixCodes([assigned, dog]); //=> 'AD'
>
> // To if status code is part of the status

> var statusCode = 'AD';
>
> var irate_customer = 'AE';
>
> TreeStatus.includes(statusCode, assigned); //=> true
>
> TreeStatus.includes(statusCode, irate_customer); //=> false
