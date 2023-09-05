import { prismaClient } from "../database/prismaClient.js";

export class ProductController{
    static async createDBInfo(req, res){
        const { name, bar_code, price } = req.body;
        try{
            const newProduct = await prismaClient.products.create({
                data: {
                    name,
                    bar_code,
                    price,
                }
            });

            return res.status(200).send('Dados criados com sucesso!');
        } catch(err){
            return res.status(500).send('Erro: '+err);
        };
    }

    static async readDBInfo(req, res){
        try{
            const readInfo = await prismaClient.products.findMany();

            return res.status(200).json(readInfo);
        } catch(err){
            return res.status(500).send('Erro: '+err);
        };
    }

    static async readOneDBInfo(req, res){
        const { id } = req.params;
        try{
            const readOneInfo = await prismaClient.products.findUnique({ where: { id } });

            return res.status(200).json(readOneInfo);
        } catch(err){
            return res.status(500).send('Erro: '+err);
        };
    }

    static async updateDBInfo(req, res){
        const { id } = req.params;
        const info = req.body;
        try{
            const updateInfo = await prismaClient.products.update({
                where: { id },
                data: info
            });

            return res.status(200).send('Dados atualizados com sucesso!');
        } catch(err){
            return res.status(500).send('Erro: '+err);
        };
    }

    static async deleteDBInfo(req, res){
        const { id } = req.params;
        try{
            const deleteInfo = await prismaClient.products.delete({ where: { id } });

            return res.status(200).send('Dados deletados com sucesso!');
        } catch(err){
            return res.status(500).send('Erro: '+err);
        };
    }
}