import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

import { TracedPayload } from './traced-payload.entity';
import { TRANSPORT_PROXY } from 'src/common/constants/transport-proxy-token.constant';

@Injectable()
export class NetworkingService {
  protected readonly logger = new Logger(NetworkingService.name);

  constructor(
    @Inject(TRANSPORT_PROXY.TCP) private readonly tcp: ClientProxy,
    @Inject(TRANSPORT_PROXY.REDIS) private readonly redis: ClientProxy,
  ) {}

  async send<T>(pattern: string, payload: any): Promise<T> {
    const message = TracedPayload.fromMessagePattern(payload);
    return lastValueFrom(this.tcp.send<T>(pattern, message));
  }

  async emit(event: string, payload: any): Promise<void> {
    const message = TracedPayload.fromEventPattern(payload);
    this.redis.emit(event, message);
  }

  // async enqueue(event: string, payload: any): Promise<unknown> {
  //   const data = TracedPayload.fromQueuePattern(payload);
  //   return lastValueFrom(this.pubsub.enqueue({ event, data }));
  // }
}
