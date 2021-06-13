import { GeneratorService } from "./generator.service";

export function* genID() {
    while (true) {
        yield GeneratorService.getNewID();
    }
}