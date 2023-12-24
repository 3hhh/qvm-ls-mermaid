# qvm-ls-mermaid

Generate [mermaid-js](https://mermaid-js.github.io/) network and [RPC](https://www.qubes-os.org/doc/rpc-policy/) graphs for your [Qubes OS](https://www.qubes-os.org/) system and display them inside a [Qubes OS](https://www.qubes-os.org/) VM.

See the architecture of an entire Qubes OS system at a glance!

The output is a full html page displayed in your browser. For static images you can convert that with e.g. [mermaid-cli](https://github.com/mermaid-js/mermaid-cli).

## Example

A full Qubes OS installation including _all_ configured RPC policies:  
![Example](examples/1.png)

This example was generated via `qvm-ls-mermaid -nR`.

### What do I see here?

- The thick arrows represent network connections, the thin arrows RPC policy relations.
- A blue VM border indicates a template VM, a red border indicates a disposable VM and a neutral border a regular AppVM.
- VMs are colored according to their security label. VM and Policy Groups have no special color or border.
- VM Groups represent multiple VMs, Policy Groups multiple RPC policies. These nodes can be clicked to show the contained VMs/policies when the `-D` option was used (not here).
- Policy Group nodes have a special form to discern them from VMs. If they only represent a single policy, they are removed and the policy name can be found at the edge (e.g. between VM Group 5,4 and 2).
- "disp:" indicates that the RPC policy is only valid for disposable VMs of the target node (VM Group 4 contains many template VMs).
- VMs without network or RPC policy relations were removed from the graph thanks to the `-n` option.
- This is a graph generated from a real-world Qubes OS system with more than 50 VMs, but [it easily fits on your 2k+ screen](https://raw.githubusercontent.com/3hhh/qvm-ls-mermaid/master/examples/1.png)!

## Features

- VMs are displayed as nodes in a directed graph, connected according to their network and [RPC](https://www.qubes-os.org/doc/rpc-policy/) relations
- automatic node placement
- usage of web standards:
  - arbitrary customization
  - arbitrary zoom
- input filtering via `grep`, `sed`, ...
- clickable nodes
- custom content (notes?) can be added to nodes
- RCS friendly:
  - text output
  - subsequent updates keep custom content

## Installation

1. Download [blib](https://github.com/3hhh/blib), copy it to dom0 and install it according to [its instructions](https://github.com/3hhh/blib#installation).
2. In dom0, install the [networkx library](https://networkx.org/) via `sudo qubes-dom0-update python3-networkx`. If you skip this step, the RPC graph (`-R` option) cannot be generated.
3. Download this repository with `git clone https://github.com/3hhh/qvm-ls-mermaid.git` or your browser and copy it to dom0.
4. Move the repository to a directory of your liking.
5. Symlink the `qvm-ls-mermaid` binary into your dom0 `PATH` for convenience, e.g. to `/usr/bin/`.

The same steps can also be executed inside a VM, if you don't want to install `qvm-ls-mermaid` inside `dom0`. Using the program inside a VM may be less convenient and provide less features though.

### A word of caution

It is recommended to apply standard operational security practices during installation such as:

- Github SSL certificate checks
- Check the GPG commit signatures using `git log --pretty="format:%h %G? %GK %aN  %s"`. All of them should be good (G) signatures coming from the same key `(1533 C122 5C1B 41AF C46B 33EB) EB03 A691 DB2F 0833` (assuming you trust that key).
- Code review

You're installing something to dom0 after all.

## Usage

Execute `qvm-ls-mermaid help` on the command-line to obtain an overview of its capabilities.

By default a network graph is generated. Use the `-R` option to also include [RPC](https://www.qubes-os.org/doc/rpc-policy/) relations in the output graph.

### Usage inside a VM

This program may run inside a regular (non-admin) VM. The input data however must come from `dom0`.

The following steps are needed:

1. Run `qvm-ls --raw-data -O name,CLASS,label,netvm,provides_network,template,template_for_dispvms,virt_mode > qvmls.txt && qrexec-policy-graph --include-ask > qpol.txt` in `dom0` to generate the input data. Note that these tools are natively installed in Qubes OS `dom0`.
2. Copy the data to the VM where `qvm-ls-mermaid` is installed, e.g. via `qvm-copy-to-vm [vm] qvmls.txt qpol.txt`.
3. Go to the `qvm-ls-mermaid` installation directory using a terminal emulator of your choice.
4. Execute `( cat ~/QubesIncoming/dom0/qvmls.txt ; ./prune-policy-graph < ~/QubesIncoming/dom0/qpol.txt ) | ./qvm-ls-mermaid --vm > mermaid/qvm-ls-mermaid.js` (feel free to add additional options).
5. Use the output file at `mermaid/qvm-ls-mermaid.js` in your favourite [mermaid-js](https://mermaid-js.github.io/) viewer or just display it inside your browser via `cd mermaid ; ./run`.

Alternatively it is possible to setup a Qubes OS [admin VM](https://www.qubes-os.org/doc/admin-api/) with limited access rights to retrieve the required data. A community guide describing this approach can be found [here](https://forum.qubes-os.org/t/visualize-qubes-configuration-without-trust-a-use-case-for-the-qubes-admin-api/23072).

## Uninstall

1. Remove all symlinks that you created during the installation.
2. Remove the repository clone from dom0.
3. Uninstall [blib](https://github.com/3hhh/blib) according to [its instructions](https://github.com/3hhh/blib#uninstall).

## Copyright

© 2023 David Hobach
GPLv3

See `LICENSE` for details.
