---
title: Verilog Inputs
---

Although the `input` direction is taken by default, it is preferable to explicitly specify the direction to improve readability and make the code self-documenting.

<pre>module bad_example;

	function int my_func(<span class="info">int a, b</span>);          // bad: direction of a and b omitted
		return a+b;
	endfunction
	
	task my_task(<span class="info">int a, b</span>);                 // bad: direction of a and b omitted
	begin
		$display(a);
		$display(b);
	end
	endtask
	
endmodule</pre>

<pre>module good_example;

	function int my_func(<span class="goodcode">input</span> int a, b);   // good: direction of a and b specified
		return a+b;
	endfunction
	
	task my_task(<span class="goodcode">input</span> int a, b);          // good: direction of a and b specified
	begin
		$display(a);
		$display(b);
	end
	endtask
	
endmodule</pre>


{{% lintrule sv 14 %}}
