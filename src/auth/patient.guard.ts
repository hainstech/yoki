import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class SelfPatientAuthGuard extends AuthGuard('jwt') {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const parentCanActivate = (await super.canActivate(context)) as boolean;
    const req = context.switchToHttp().getRequest();
    const user = req.user;
    const id = req.params.id;

    return user.role === 'patient' && user.patientId.toString() === id;
  }
}
