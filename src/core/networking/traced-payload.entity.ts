import {
  context as otelContext,
  propagation,
  TextMapGetter,
  TextMapSetter,
} from '@opentelemetry/api';

export const TRACE_METADATA_KEY = 'trace-metadata';

export class MessageTextMapSetter implements TextMapSetter<any> {
  set(carrier: any, key: string, value: string): void {
    if (!carrier[TRACE_METADATA_KEY]) {
      carrier[TRACE_METADATA_KEY] = {};
    }
    carrier[TRACE_METADATA_KEY][key] = value;
  }
}

export class MessageTextMapGetter implements TextMapGetter<any> {
  keys(carrier: any): string[] {
    return carrier[TRACE_METADATA_KEY]
      ? Object.keys(carrier[TRACE_METADATA_KEY])
      : [];
  }

  get(carrier: any, key: string): string | string[] | undefined {
    return carrier[TRACE_METADATA_KEY]?.[key];
  }
}

export class TracedPayload {
  constructor(public payload: any) {
    const setter = new MessageTextMapSetter();
    propagation.inject(otelContext.active(), this.payload, setter);
  }

  static fromMessagePattern(payload: any): any {
    return new TracedPayload(payload).payload;
  }

  static fromEventPattern(payload: any): any {
    return new TracedPayload(payload).payload;
  }

  static fromQueuePattern(payload: any): any {
    return new TracedPayload(payload).payload;
  }
}
