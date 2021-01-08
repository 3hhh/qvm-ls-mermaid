graph TB

%% nodes %%

dom0(dom0)
class dom0 class_AdminVM;
class dom0 label_black;
click dom0 show_details "details"

sys-dns(sys-dns)
class sys-dns class_DispVM;
class sys-dns label_yellow;
click sys-dns show_details "details"

sys-fw(sys-fw)
class sys-fw class_DispVM;
class sys-fw label_green;
click sys-fw show_details "details"

sys-fw-vpn(sys-fw-vpn)
class sys-fw-vpn class_DispVM;
class sys-fw-vpn label_green;
click sys-fw-vpn show_details "details"

sys-net(sys-net)
class sys-net class_DispVM;
class sys-net label_red;
click sys-net show_details "details"

sys-usb(sys-usb)
class sys-usb class_DispVM;
class sys-usb label_orange;
click sys-usb show_details "details"

sys-vpn(sys-vpn)
class sys-vpn class_DispVM;
class sys-vpn label_orange;
click sys-vpn show_details "details"

e-mail(e-mail)
class e-mail class_AppVM;
class e-mail label_yellow;
click e-mail show_details "details"

internal-dvm(internal-dvm)
class internal-dvm class_AppVM;
class internal-dvm label_green;
class internal-dvm dispTemplate;
click internal-dvm show_details "details"

nonet-dvm(nonet-dvm)
class nonet-dvm class_AppVM;
class nonet-dvm label_blue;
class nonet-dvm dispTemplate;
click nonet-dvm show_details "details"

Policy_Group_1>Policy Group 1]
class Policy_Group_1 group_policies
click Policy_Group_1 show_details "details"

Policy_Group_2>Policy Group 2]
class Policy_Group_2 group_policies
click Policy_Group_2 show_details "details"

Policy_Group_3>Policy Group 3]
class Policy_Group_3 group_policies
click Policy_Group_3 show_details "details"

Policy_Group_4>Policy Group 4]
class Policy_Group_4 group_policies
click Policy_Group_4 show_details "details"

Policy_Group_5>Policy Group 5]
class Policy_Group_5 group_policies
click Policy_Group_5 show_details "details"

print-dvm(print-dvm)
class print-dvm class_AppVM;
class print-dvm label_orange;
class print-dvm dispTemplate;
click print-dvm show_details "details"

surfing-dvm(surfing-dvm)
class surfing-dvm class_AppVM;
class surfing-dvm label_red;
class surfing-dvm dispTemplate;
click surfing-dvm show_details "details"

sys-dns-dvm(sys-dns-dvm)
class sys-dns-dvm class_AppVM;
class sys-dns-dvm label_yellow;
class sys-dns-dvm dispTemplate;
click sys-dns-dvm show_details "details"

sys-fw-dvm(sys-fw-dvm)
class sys-fw-dvm class_AppVM;
class sys-fw-dvm label_green;
class sys-fw-dvm dispTemplate;
click sys-fw-dvm show_details "details"

sys-net-dvm(sys-net-dvm)
class sys-net-dvm class_AppVM;
class sys-net-dvm label_red;
class sys-net-dvm dispTemplate;
click sys-net-dvm show_details "details"

sys-usb-dvm(sys-usb-dvm)
class sys-usb-dvm class_AppVM;
class sys-usb-dvm label_orange;
class sys-usb-dvm dispTemplate;
click sys-usb-dvm show_details "details"

sys-vpn-dvm(sys-vpn-dvm)
class sys-vpn-dvm class_AppVM;
class sys-vpn-dvm label_orange;
class sys-vpn-dvm dispTemplate;
click sys-vpn-dvm show_details "details"

VM_Group_1(VM Group 1)
class VM_Group_1 group_vms
click VM_Group_1 show_details "details"

VM_Group_2(VM Group 2)
class VM_Group_2 group_vms
click VM_Group_2 show_details "details"

VM_Group_3(VM Group 3)
class VM_Group_3 group_vms
click VM_Group_3 show_details "details"

VM_Group_4(VM Group 4)
class VM_Group_4 group_vms
click VM_Group_4 show_details "details"

VM_Group_5(VM Group 5)
class VM_Group_5 group_vms
click VM_Group_5 show_details "details"

VM_Group_6(VM Group 6)
class VM_Group_6 group_vms
click VM_Group_6 show_details "details"

VM_Group_7(VM Group 7)
class VM_Group_7 group_vms
click VM_Group_7 show_details "details"

%% edges %%

sys-dns ==> sys-vpn
sys-dns --> Policy_Group_1
sys-fw ==> sys-net
sys-fw-vpn ==> sys-vpn
sys-net --> Policy_Group_1
sys-usb --> Policy_Group_1
sys-vpn ==> sys-fw
sys-vpn --> Policy_Group_1
e-mail ==> sys-fw-vpn
internal-dvm ==> sys-fw
Policy_Group_1 -->|sys-dns|sys-dns-dvm
Policy_Group_1 -->|sys-net|sys-net-dvm
Policy_Group_1 -->|sys-usb|sys-usb-dvm
Policy_Group_1 -->|sys-vpn|sys-vpn-dvm
Policy_Group_1 -->|VM_Group_6|sys-fw-dvm
Policy_Group_1 -->|VM_Group_7|nonet-dvm
Policy_Group_2 -->|VM_Group_1|VM_Group_2
Policy_Group_3 -->|VM_Group_1|VM_Group_3
Policy_Group_4 -->|VM_Group_1|VM_Group_4
Policy_Group_5 -->|VM_Group_1|dom0
print-dvm ==> sys-fw
surfing-dvm ==> sys-fw-vpn
VM_Group_1 --> Policy_Group_2
VM_Group_1 --> Policy_Group_3
VM_Group_1 --> Policy_Group_4
VM_Group_1 --> Policy_Group_5
VM_Group_5 -->|disp:qubes.ClipboardPaste|VM_Group_4
VM_Group_5 -->|qubes.ClipboardPaste|VM_Group_2
VM_Group_6 --> Policy_Group_1
VM_Group_7 --> Policy_Group_1
