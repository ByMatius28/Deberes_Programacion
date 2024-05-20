import { CreateCreatureDto } from './dto/create-creature.dto';
import { UpdateCreatureDto } from './dto/update-creature.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class CreaturesService {
    private prisma;
    constructor(prisma: PrismaService);
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
    findAllcreatures(): import(".prisma/client").Prisma.PrismaPromise<{
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
    findAllExtinct(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        description: string;
        LastSee: string;
        countLastSee: number;
        extinct: boolean;
        createAt: Date;
        updateAt: Date;
    }[]>;
    findOne(id: number): string;
    update(id: number, updateCreatureDto: UpdateCreatureDto): import(".prisma/client").Prisma.Prisma__CreatureClient<{
        id: number;
        name: string;
        description: string;
        LastSee: string;
        countLastSee: number;
        extinct: boolean;
        createAt: Date;
        updateAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__CreatureClient<{
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
