import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { BookOpen, CheckSquare } from "lucide-react";

const validationChecklist = [
  "Todos os campos obrigatórios foram mapeados",
  "Os tipos de dados foram validados entre os sistemas",
  "As regras de negócio foram documentadas e aprovadas pelo cliente",
  "O fluxo da ficha técnica foi validado com a equipe do cliente",
  "As telas do ERP foram identificadas e documentadas",
  "Os responsáveis por cada etapa foram definidos",
  "O cronograma foi acordado com o cliente",
  "Existe plano de contingência para o go-live",
];

export default function Step6Rules() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            Instruções
          </CardTitle>
          <CardDescription>
            Documente as regras de negócio que afetam a integração e liste os documentos de
            referência. Ao final, valide o mapeamento com o checklist de verificação.
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Business Rules */}
      <Card>
        <CardHeader>
          <CardTitle>Regras de Negócio</CardTitle>
          <CardDescription>
            Liste as regras que impactam o fluxo de dados entre Audaces e o ERP
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>#</TableHead>
                <TableHead>Regra</TableHead>
                <TableHead>Condição</TableHead>
                <TableHead>Ação Esperada</TableHead>
                <TableHead>Sistema</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 5 }).map((_, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium text-muted-foreground w-10">
                    {i + 1}
                  </TableCell>
                  <TableCell>
                    <Input placeholder="Ex: Produto com custo > R$ 100" className="text-xs" />
                  </TableCell>
                  <TableCell>
                    <Input placeholder="Ex: Quando ficha é aprovada" className="text-xs" />
                  </TableCell>
                  <TableCell>
                    <Input placeholder="Ex: Enviar para aprovação gerencial" className="text-xs" />
                  </TableCell>
                  <TableCell>
                    <Input placeholder="Ex: ERP / Audaces" className="text-xs" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Documents */}
      <Card>
        <CardHeader>
          <CardTitle>Documentos de Referência</CardTitle>
          <CardDescription>
            Links para documentos, manuais ou materiais de apoio
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {["Manual do ERP", "Especificação da API", "Regras de codificação", "Outros documentos"].map(
            (doc) => (
              <div key={doc} className="space-y-1">
                <Label className="text-sm">{doc}</Label>
                <Input placeholder="Cole o link ou caminho do documento..." />
              </div>
            )
          )}
          <div className="space-y-1">
            <Label className="text-sm">Observações adicionais</Label>
            <Textarea rows={3} placeholder="Informações complementares sobre documentação..." />
          </div>
        </CardContent>
      </Card>

      {/* Validation Checklist */}
      <Card className="border-[hsl(var(--step-complete))]/30 bg-[hsl(var(--step-complete))]/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckSquare className="w-5 h-5 text-[hsl(var(--step-complete))]" />
            Checklist de Validação Final
          </CardTitle>
          <CardDescription>
            Confirme que todos os itens foram verificados antes de finalizar o mapeamento
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            {validationChecklist.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <Checkbox id={item} />
                <Label htmlFor={item} className="text-sm font-normal leading-snug cursor-pointer">
                  {item}
                </Label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
