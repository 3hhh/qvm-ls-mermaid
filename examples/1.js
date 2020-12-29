graph RL

%% nodes %%

sys-fw(sys-fw)
class sys-fw class_DispVM;
class sys-fw label_green;
click sys-fw show_details "details"

sys-net(sys-net)
class sys-net class_AppVM;
class sys-net label_red;
click sys-net show_details "details"

AppVM(AppVM)
class AppVM class_AppVM;
class AppVM label_orange;
click AppVM show_details "details"

%% links %%

sys-fw --> sys-net
AppVM --> sys-fw
