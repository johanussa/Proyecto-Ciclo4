import { resolversProject } from "../models/project/ResolversProject";
import { resolversUser } from "../models/users/ResolversUser";
import { resolverInscription } from "../models/inscriptions/ResolverInscriptions";
import { resolverAdvance } from "../models/advances/ResolverAdvance";

export const resolvers = [ 
    resolversProject, 
    resolversUser, 
    resolverInscription, 
    resolverAdvance 
];