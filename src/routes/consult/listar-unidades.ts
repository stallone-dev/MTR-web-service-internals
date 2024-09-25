/*
    This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

import {
    type MtrWSBaseURL,
    MtrWSRoute,
    type MtrWSType,
} from "@stallone-dev/types-mtr-web-service";
import { ApiRequest } from "../../model/api-request.ts";

export { listarUnidadesDeMedida };

class listarUnidadesDeMedida extends ApiRequest {
    private token: MtrWSType.auth.token;

    constructor(
        authToken: MtrWSType.auth.token,
        API_BASE_URL: MtrWSBaseURL,
    ) {
        super(API_BASE_URL, MtrWSRoute.LISTAR_UNIDADES_MEDIDA);
        this.token = authToken;
    }

    /**
     * Consultar dados de um MTR
     */
    public async getResult(): Promise<
        MtrWSType.responseModel.listarUnidadesMedida
    > {
        const req = await this.makeRequest<
            MtrWSType.requestModel.listarUnidadesMedida,
            MtrWSType.responseModel.listarUnidadesMedida
        >({
            method: "POST",
            auth: this.token,
        });

        return req;
    }
}
