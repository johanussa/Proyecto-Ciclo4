import { gql } from "apollo-server-core";
import { typeProject } from "../models/project/TypesProject";
import { typeUser } from "../models/users/TypesUser";

const allTypes = gql`
    scalar Date
`;

export const typesDefs = [ 
    allTypes, typeProject, typeUser ];