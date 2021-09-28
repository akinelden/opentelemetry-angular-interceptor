openTelemetryConfig = {
  commonConfig: {
    console: true, // Display trace on console
    production: false, // Send Trace with BatchSpanProcessor (true) or SimpleSpanProcessor (false)
    serviceName: 'interceptor-example', // Service name send in trace
    logBody: true, // true add body in a log, nothing otherwise
    probabilitySampler: '1' // 75% sampling
  },
  otelcolConfig: {
    url: 'http://127.0.0.1:4318/v1/traces', // URL of opentelemetry collector
    attributes: {
      test: 'test'
    }
  }
};

window["otelConf"] = openTelemetryConfig;