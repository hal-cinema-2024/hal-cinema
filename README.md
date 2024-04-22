# HAL-cinema

## How to development?

### Requirement
| tool | url |
|--|--|
| proto | https://moonrepo.dev/ |
| docker | https://www.docker.com/ |
| make | |

### Install proto
#### Requirement
- git
- unzip
- gzip
- xz-utils (xz)

```bash
# Linux, macOS, WSL
$ curl -fsSL https://moonrepo.dev/install/proto.sh | bash
```

### setup

```bash
# use proto
$ proto use

# using proto path
export PROTO_HOME="$HOME/.proto"
export PATH="$PROTO_HOME/shims:$PROTO_HOME/bin:$PATH"
```