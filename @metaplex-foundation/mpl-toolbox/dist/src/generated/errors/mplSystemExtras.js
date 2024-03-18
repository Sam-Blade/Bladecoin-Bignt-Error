"use strict";
/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMplSystemExtrasErrorFromName = exports.getMplSystemExtrasErrorFromCode = exports.SysExInvalidOwnerForSourceError = exports.SysExInvalidSystemProgramError = void 0;
const umi_1 = require("@metaplex-foundation/umi");
const codeToErrorMap = new Map();
const nameToErrorMap = new Map();
/** InvalidSystemProgram: Invalid System Program */
class SysExInvalidSystemProgramError extends umi_1.ProgramError {
    constructor(program, cause) {
        super('Invalid System Program', program, cause);
        this.name = 'InvalidSystemProgram';
        this.code = 0x0; // 0
    }
}
exports.SysExInvalidSystemProgramError = SysExInvalidSystemProgramError;
codeToErrorMap.set(0x0, SysExInvalidSystemProgramError);
nameToErrorMap.set('InvalidSystemProgram', SysExInvalidSystemProgramError);
/** InvalidOwnerForSource: Invalid Program Owner For The Source Account */
class SysExInvalidOwnerForSourceError extends umi_1.ProgramError {
    constructor(program, cause) {
        super('Invalid Program Owner For The Source Account', program, cause);
        this.name = 'InvalidOwnerForSource';
        this.code = 0x1; // 1
    }
}
exports.SysExInvalidOwnerForSourceError = SysExInvalidOwnerForSourceError;
codeToErrorMap.set(0x1, SysExInvalidOwnerForSourceError);
nameToErrorMap.set('InvalidOwnerForSource', SysExInvalidOwnerForSourceError);
/**
 * Attempts to resolve a custom program error from the provided error code.
 * @category Errors
 */
function getMplSystemExtrasErrorFromCode(code, program, cause) {
    const constructor = codeToErrorMap.get(code);
    return constructor ? new constructor(program, cause) : null;
}
exports.getMplSystemExtrasErrorFromCode = getMplSystemExtrasErrorFromCode;
/**
 * Attempts to resolve a custom program error from the provided error name, i.e. 'Unauthorized'.
 * @category Errors
 */
function getMplSystemExtrasErrorFromName(name, program, cause) {
    const constructor = nameToErrorMap.get(name);
    return constructor ? new constructor(program, cause) : null;
}
exports.getMplSystemExtrasErrorFromName = getMplSystemExtrasErrorFromName;
//# sourceMappingURL=mplSystemExtras.js.map