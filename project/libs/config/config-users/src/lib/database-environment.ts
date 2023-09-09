import { IsNumber, IsString, Max, Min } from 'class-validator';

enum Port {
  Min = 0,
  Max = 65535
}

export enum EnvValidationMessage {
    DBHostRequired = 'MongoDB host is required',
    DBNameRequired = 'Database name is required',
    DBPortRequired = 'MongoDB port is required',
    DBUserRequired = 'MongoDB user is required',
    DBPasswordRequired = 'MongoDB password is required',
    DBBaseAuthRequired = 'MongoDB authentication base is required',
}

export class DatabaseEnvironment {
    @IsString({
        message: EnvValidationMessage.DBNameRequired
    })
    public name!: string;

    @IsString({
        message: EnvValidationMessage.DBHostRequired
    })
    public host!: string;

    @IsNumber({}, {
        message: EnvValidationMessage.DBPortRequired
    })
    @Min(Port.Min)
    @Max(Port.Max)
    public port?: number;

    @IsString({
        message: EnvValidationMessage.DBUserRequired
    })
    public user!: string;

    @IsString({
        message: EnvValidationMessage.DBPasswordRequired
    })
    public password!: string;

    @IsString({
        message: EnvValidationMessage.DBBaseAuthRequired
    })
    public authBase!: string;
}
