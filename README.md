# password-and-confirm-directive

Simple password input and confirm [AngularJS](http://angularjs.org/) directive.

## How to use it

You must include the password-and-confirm-directive dependency on your angular module:
```
var app = angular.module("demoapp", ["passwordAndConfirm"]);
```

And add this in your template :
```
<password:and:confirm model="user.password" form="userForm"></password:and:confirm>
```

## Options

* `model` (required) : the password scope variable.
* `form` (required) : the form
* `template` (optional) : alternative template 

## Use your own template
```
<password:and:confirm template="user/password.tpl.html" model="user.password" form="userForm"></password:and:confirm>
```

You can use this one as a start point :
```
<div class="control-group">
	<label class="control-label" for="password">Mot de passe</label>
	<div class="controls"><input type="password" name="password" id="password" ng-model="password" /></div>
</div>
<div class="control-group"  ng-class="{error: form.confirm.$error.password}">
	<label class="control-label" for="confirm">Confirmer le mot de passe</label>
	<div class="controls"><input type="password" name="confirm" id="confirm" ng-model="confirm" /></div>
</div>
```

The `form.confirm.$error.password` is raised if the two fields are not the same.

## LICENSE

DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
                    Version 2, December 2004 

 Copyright (C) 2004 Sam Hocevar <sam@hocevar.net> 

 Everyone is permitted to copy and distribute verbatim or modified 
 copies of this license document, and changing it is allowed as long 
 as the name is changed. 

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION 

  0. You just DO WHAT THE FUCK YOU WANT TO.