import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from "@nestjs/common";
import { DomainError } from "src/customer/domain/error/domain-error";

@Catch(DomainError)
export class DomainExceptionFilter implements ExceptionFilter {
    catch(exception: DomainError, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();

        response.status(HttpStatus.BAD_REQUEST).json({
          statusCode: HttpStatus.BAD_REQUEST,
          message: exception.message
        });
      }
}