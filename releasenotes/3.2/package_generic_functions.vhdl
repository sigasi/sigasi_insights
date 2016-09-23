package myTypes is
	subtype myInt is integer range 0 to 100;

	function myPlus(a, b : myInt) return integer;
	function myToString(a : myInt) return String;
end package myTypes;

package body myTypes is
	function myPlus(a, b : myInt) return integer is
	begin
		return a + b;
	end function myPlus;

	function myToString(a : myInt) return String is
	begin
		return myInt'image(a);
	end function myToString;
end package body myTypes;

package packageGenericFunctionsDemo is
	generic(
		type genType;
		function plus(a : genType; b : genType) return genType;
		function toString(a : genType) return string
	);

	procedure demo(a : in genType);
end package packageGenericFunctionsDemo;

package body packageGenericFunctionsDemo is
	procedure demo(a : in genType) is
	begin
			report "demo: " & toString(a);
	end procedure demo;
end package body packageGenericFunctionsDemo;

use work.myTypes.all;

package test is new work.packageGenericFunctionsDemo
	generic map(
		genType => myInt,
		plus => myPlus,
		toString => myToString
	);

use work.test.all;

entity testEntity is
end entity testEntity;

architecture beh of testEntity is
	constant a : genType := plus(10, 13);
begin
	demo(a);

end architecture beh;
