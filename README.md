starkjs-underscore
==================

This just adds some sugar to underscore.

### Working with types

** isDefined ** _.isDefined(value)
sugar method to check for undefined or null.

	_.isDefined(null);
	=> false
    
** getType ** _.getType(value)
returns name of the type. Names are in lowercase.

	_.getType('foo'/2);
	=> 'nan'

