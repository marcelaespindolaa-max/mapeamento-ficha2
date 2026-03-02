import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { GitBranch, ArrowRight } from "lucide-react";

const workflowStages = [
  "Criação do Modelo",
  "Desenvolvimento do Produto",
  "Aprovação de Amostra",
  "Ficha Técnica Final",
  "Ordem de Produção",
];

const exampleRows = [
  {
    stage: "Criação do Modelo",
    system: "Audaces Isa",
    area: "Estilo / Design",
    data: "Croqui, referência, coleção, linha",
    obs: "Dados iniciais do produto",
  },
  {
    stage: "Desenvolvimento do Produto",
    system: "Audaces Isa + ERP",
    area: "Engenharia de Produto",
    data: "Materiais, consumos, fornecedores, cores",
    obs: "Ficha parcial com BOM",
  },
  {
    stage: "Aprovação de Amostra",
    system: "Audaces Isa",
    area: "Qualidade / Estilo",
    data: "Status de aprovação, comentários",
    obs: "Workflow de aprovação",
  },
  {
    stage: "Ficha Técnica Final",
    system: "Audaces Isa → ERP",
    area: "Engenharia / PCP",
    data: "Ficha completa, grade, custos",
    obs: "Ponto de integração principal",
  },
  {
    stage: "Ordem de Produção",
    system: "ERP",
    area: "PCP",
    data: "Quantidade, prazo, roteiro",
    obs: "Gerada a partir da ficha integrada",
  },
];

export default function Step4Workflow() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <GitBranch className="w-5 h-5 text-primary" />
            Instruções
          </CardTitle>
          <CardDescription>
            Mapeie o fluxo completo da ficha técnica no cliente — desde a criação do modelo até
            a ordem de produção. Identifique em cada etapa qual sistema é usado, a área responsável
            e os dados envolvidos.
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Visual flow diagram */}
      <Card>
        <CardHeader>
          <CardTitle>Fluxo Visual</CardTitle>
          <CardDescription>Etapas típicas do ciclo de vida da ficha técnica</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-center gap-2 justify-center">
            {workflowStages.map((stage, i) => (
              <div key={stage} className="flex items-center gap-2">
                <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium text-center min-w-[140px]">
                  {stage}
                </div>
                {i < workflowStages.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-muted-foreground shrink-0" />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Example reference */}
      <Card className="border-accent/30 bg-accent/5">
        <CardHeader>
          <CardTitle className="text-base text-accent-foreground">📋 Exemplo de Referência</CardTitle>
          <CardDescription>Use esta tabela como modelo. Adapte ao fluxo real do cliente.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Etapa</TableHead>
                <TableHead>Sistema</TableHead>
                <TableHead>Área</TableHead>
                <TableHead>Dados Envolvidos</TableHead>
                <TableHead>Observações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {exampleRows.map((row) => (
                <TableRow key={row.stage} className="text-sm">
                  <TableCell className="font-medium">{row.stage}</TableCell>
                  <TableCell>{row.system}</TableCell>
                  <TableCell>{row.area}</TableCell>
                  <TableCell>{row.data}</TableCell>
                  <TableCell className="text-muted-foreground">{row.obs}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Editable table */}
      <Card>
        <CardHeader>
          <CardTitle>Fluxo do Cliente</CardTitle>
          <CardDescription>Preencha com o fluxo real do cliente</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Etapa</TableHead>
                <TableHead>Sistema Utilizado</TableHead>
                <TableHead>Área Responsável</TableHead>
                <TableHead>Dados Envolvidos</TableHead>
                <TableHead>Observações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 6 }).map((_, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Input placeholder={`Etapa ${i + 1}`} />
                  </TableCell>
                  <TableCell>
                    <Input placeholder="Ex: Audaces / ERP" />
                  </TableCell>
                  <TableCell>
                    <Input placeholder="Ex: Engenharia" />
                  </TableCell>
                  <TableCell>
                    <Input placeholder="Ex: Materiais, cores..." />
                  </TableCell>
                  <TableCell>
                    <Input placeholder="Observações" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
