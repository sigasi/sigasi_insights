package state_p is
	type state_t is (s1, s2, s3);		
end package ;

------------------------------------------------------
library IEEE;
use IEEE.std_logic_1164.all;

use work.state_p.all;
entity fsm1 is
	port(
		clock    : in  std_logic;
		reset    : in  std_logic;
		state    : in  state_t;
		isState3 : out std_logic;
		isOthers : out std_logic
	);
end entity;

architecture RTL of fsm1 is

begin
	name : process(clock, reset) is
	begin
		if reset = '0' then
			isState3 <= '0';
			isOthers <= '0';
		elsif rising_edge(clock) then
			case state is
				when s1 =>
					isState3 <= '0';
					isOthers <= '0';
				when s2 =>
					isState3 <= '0';
					isOthers <= '0';
				when s3 =>
					isState3 <= '1';
					isOthers <= '0';
				when others =>
					isState3 <= '0';
					isOthers <= '1';
			end case;
		end if;
	end process name;
end architecture RTL;
