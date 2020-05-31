import {SPADecodedResponseModel, SPAEncodedResponse} from "../core/security/types/response.type";

export abstract class SPATokenDecoderService {
    public abstract decode(encodedResponse: SPAEncodedResponse): SPADecodedResponseModel;
}
