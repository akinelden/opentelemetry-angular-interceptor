import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import {
  OpenTelemetryConfig,
  OTELCOL_CONFIG,
} from './configuration/opentelemetry-config';
import { OtelWebTracerComponent } from './component/otel-webtracer/otel-webtracer.component';
import { InstrumentationService } from './services/instrumentation/instrumentation.service';

@NgModule({
  declarations: [OtelWebTracerComponent],
  exports: [OtelWebTracerComponent]
})
export class OtelWebTracerModule {
  constructor(
    @Optional() @SkipSelf() parentModule?: OtelWebTracerModule
  ) {
    if (parentModule) {
      throw new Error(
        'OtelWebTracerModule is already loaded. Import it in the AppModule only'
      );
    }
  }

  public static forRoot(config: OpenTelemetryConfig): ModuleWithProviders<OtelWebTracerModule> {
    return {
      ngModule: OtelWebTracerModule,
      providers: [
        { provide: OTELCOL_CONFIG, useValue: config },
        InstrumentationService
      ],
    };
  }
}
