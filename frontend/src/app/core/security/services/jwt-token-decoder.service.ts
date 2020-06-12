import {Injectable} from "@angular/core";
import {JwtHelperService} from "@auth0/angular-jwt";
import {SPATokenDecoderService} from "../../../services/token-decoder.service";
import {SPADecodedResponseModel, SPAEncodedResponse} from "../types/response.type";

@Injectable()
export class SPAJwtTokenDecoderService implements SPATokenDecoderService {
    private jwtParserService = new JwtHelperService();

    public decode(encodedResponse: SPAEncodedResponse): SPADecodedResponseModel {
        const decodedObject = this.jwtParserService.decodeToken(encodedResponse.token);
        return {
            accessToken: encodedResponse.token,
            login: decodedObject.sub,
            firstName: decodedObject.firstName,
            roles: decodedObject.roles
        };
    }
}
