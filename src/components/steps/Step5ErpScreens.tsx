import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Monitor } from "lucide-react";

const categories = [
  {
    key: "produto",
    label: "Produto",
    fields: ["Referência", "Descrição", "Coleção", "Linha", "Grupo", "Subgrupo"],
  },
  {
    key: "cores",
    label: "Cores",
    fields: ["Código da cor", "Descrição", "RGB/Pantone", "Cor base"],
  },
  {
    key: "tamanhos",
    label: "Tamanhos",
    fields: ["Grade", "Tamanho base", "Escala", "Faixa de tamanhos"],
  },
  {
    key: "materiais",
    label: "Materiais",
    fields: ["Código", "Descrição", "Unidade", "Consumo", "Fornecedor", "Composição"],
  },
  {
    key: "operacoes",
    label: "Operações",
    fields: ["Operação", "Setor", "Tempo padrão", "Máquina", "Sequência"],
  },
  {
    key: "custos",
    label: "Custos",
    fields: ["Tipo de custo", "Valor", "Moeda", "Centro de custo"],
  },
];

const dataTypes = ["Texto", "Número", "Data", "Lista/Enum", "Booleano", "Código"];

export default function Step5ErpScreens() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Monitor className="w-5 h-5 text-primary" />
            Instruções
          </CardTitle>
          <CardDescription>
            Para cada categoria, liste as telas/cadastros do ERP que serão envolvidos na integração.
            Informe os campos preenchidos, tipo de dado e se é obrigatório. Use as abas para navegar
            entre as categorias.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Telas e Campos do ERP</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="produto">
            <TabsList className="flex flex-wrap h-auto gap-1">
              {categories.map((cat) => (
                <TabsTrigger key={cat.key} value={cat.key} className="text-xs">
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((cat) => (
              <TabsContent key={cat.key} value={cat.key} className="mt-4">
                <p className="text-sm text-muted-foreground mb-3">
                  Campos sugeridos para <strong>{cat.label}</strong>:{" "}
                  <span className="italic">{cat.fields.join(", ")}</span>
                </p>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Módulo / Tela</TableHead>
                      <TableHead>Campo no ERP</TableHead>
                      <TableHead>Campo Audaces</TableHead>
                      <TableHead>Tipo de Dado</TableHead>
                      <TableHead className="w-24">Obrigatório</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <TableRow key={i}>
                        <TableCell>
                          <Input placeholder="Ex: Cadastro de Produto" className="text-xs" />
                        </TableCell>
                        <TableCell>
                          <Input placeholder={cat.fields[i] || "Campo"} className="text-xs" />
                        </TableCell>
                        <TableCell>
                          <Input placeholder="Campo correspondente" className="text-xs" />
                        </TableCell>
                        <TableCell>
                          <Select>
                            <SelectTrigger className="text-xs">
                              <SelectValue placeholder="Tipo" />
                            </SelectTrigger>
                            <SelectContent>
                              {dataTypes.map((t) => (
                                <SelectItem key={t} value={t}>{t}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell>
                          <Select>
                            <SelectTrigger className="text-xs">
                              <SelectValue placeholder="S/N" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="S">Sim</SelectItem>
                              <SelectItem value="N">Não</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                <div className="mt-4 space-y-2">
                  <p className="text-sm font-medium">Observações / Screenshots</p>
                  <Textarea
                    rows={3}
                    placeholder="Cole links de screenshots ou descreva particularidades das telas deste módulo..."
                  />
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
