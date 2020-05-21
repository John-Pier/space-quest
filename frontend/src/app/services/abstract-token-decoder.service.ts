import {SPADecodedResponseModel, SPAEncodedResponse} from "../core/security/types/jwt-response.type";

export abstract class SPAAbstractTokenDecoderService {
    public abstract decode(encodedResponse: SPAEncodedResponse): SPADecodedResponseModel;
}
