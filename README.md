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

### how to run
```bash
make run
make migrate
```


### using addr

| app | port | url |
|--|--|--|
| HAL-cinema | 8080 | http://localhost:8080 |
| jaeger-all-in-one (Query) | 16686 | http://localhost:16686 |
| jaeger-all-in-one (Collector: accept jaeger.thrift) | 14268 | http://localhost:14268 |
| jaeger-all-in-one (collector: accept model.proto) | 14250 | http://localhost:14250 |
| zipkin-all-in-one (ui) | 9411 | http://localhost:9411 |
| otel-collector | 1888 | http://localhost:9411 |
| otel-collector | 13133 | http://localhost:13133 |
| otel-collector | 4317 | http://localhost:4317 |
| otel-collector | 55679 | http://localhost:55679 |
