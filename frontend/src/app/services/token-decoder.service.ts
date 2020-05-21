import {SPADecodedResponseModel, SPAEncodedResponse} from "../core/security/types/jwt-response.type";

export abstract class SPATokenDecoderService {
    public abstract decode(encodedResponse: SPAEncodedResponse): SPADecodedResponseModel;
}
