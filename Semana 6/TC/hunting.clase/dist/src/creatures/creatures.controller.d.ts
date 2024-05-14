import { CreaturesService } from './creatures.service';
import { CreateCreatureDto } from './dto/create-creature.dto';
import { UpdateCreatureDto } from './dto/update-creature.dto';
export declare class CreaturesController {
    private readonly creaturesService;
    constructor(creaturesService: CreaturesService);
    create(createCreatureDto: CreateCreatureDto): import(".prisma/client").Prisma.Prisma__CreatureClient<{
        id: number;
        name: string;
        description: string;
        LastSee: string;
        countLastSee: number;
        extinct: boolean;
        createAt: Date;
        updateAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        description: string;
        LastSee: string;
        countLastSee: number;
        extinct: boolean;
        createAt: Date;
        updateAt: Date;
    }[]>;
    findAllnoExtinct(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        description: string;
        LastSee: string;
        countLastSee: number;
        extinct: boolean;
        createAt: Date;
        updateAt: Date;
    }[]>;
    findAllExtincts(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        description: string;
        LastSee: string;
        countLastSee: number;
        extinct: boolean;
        createAt: Date;
        updateAt: Date;
    }[]>;
    findOne(id: string): string;
    update(id: string, updateCreatureDto: UpdateCreatureDto): import(".prisma/client").Prisma.Prisma__CreatureClient<{
        id: number;
        name: string;
        description: string;
        LastSee: string;
        countLastSee: number;
        extinct: boolean;
        createAt: Date;
        updateAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__CreatureClient<{
        id: number;
        name: string;
        description: string;
        LastSee: string;
        countLastSee: number;
        extinct: boolean;
        createAt: Date;
        updateAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
