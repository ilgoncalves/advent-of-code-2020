--- Dia 5: embarque binário ---

Você embarca no avião apenas para descobrir um novo problema: você deixou cair seu cartão de embarque! Você não tem certeza de qual assento é seu, e todos os comissários de bordo estão ocupados com a enxurrada de pessoas que de repente conseguiram passar pelo controle de passaportes.

Você escreve um programa rápido para usar a câmera do seu telefone para escanear todos os cartões de embarque próximos (sua entrada de quebra-cabeça); talvez você possa encontrar seu assento por meio do processo de eliminação.

Em vez de zonas ou grupos, esta companhia aérea usa particionamento de espaço binário para acomodar as pessoas. Um assento pode ser especificado como FBFBBFFRLR, onde F significa "frente", B significa "atrás", L significa "esquerda" e R significa "direita".

Os primeiros 7 caracteres serão F ou B; eles especificam exatamente uma das 128 linhas no plano (numeradas de 0 a 127). Cada letra informa em qual metade de uma região está o assento fornecido. Comece com toda a lista de fileiras; a primeira letra indica se o assento está na frente (0 a 63) ou atrás (64 a 127). A próxima letra indica em qual metade daquela região o assento está e assim por diante até que você fique com exatamente uma fileira.

Por exemplo, considere apenas os primeiros sete caracteres de FBFBBFFRLR:

Comece considerando todo o intervalo, linhas de 0 a 127.
F significa pegar a metade inferior, mantendo as linhas de 0 a 63.
B significa pegar a metade superior, mantendo as linhas 32 a 63.
F significa pegar a metade inferior, mantendo as linhas 32 a 47.
B significa pegar a metade superior, mantendo as linhas 40 a 47.
B mantém as linhas 44 a 47.
F mantém as linhas 44 a 45.
O F final mantém o mais baixo dos dois, a linha 44.
Os últimos três caracteres serão L ou R; estes especificam exatamente uma das 8 colunas de assentos no avião (numeradas de 0 a 7). O mesmo processo acima prossegue novamente, desta vez com apenas três etapas. L significa manter a metade inferior, enquanto R significa manter a metade superior.

Por exemplo, considere apenas os últimos 3 caracteres de FBFBBFFRLR:

Comece considerando todo o intervalo, colunas de 0 a 7.
R significa pegar a metade superior, mantendo as colunas de 4 a 7.
L significa pegar a metade inferior, mantendo as colunas de 4 a 5.
O R final mantém o superior dos dois, coluna 5.
Portanto, a decodificação de FBFBBFFRLR revela que é o assento na linha 44, coluna 5.

Cada assento também tem um ID de assento exclusivo: multiplique a linha por 8 e, em seguida, adicione a coluna. Neste exemplo, o assento tem ID 44 * 8 + 5 = 357.

Aqui estão alguns outros cartões de embarque:

BFFFBBFRRR: linha 70, coluna 7, assento ID 567.
FFFBBBFRRR: linha 14, coluna 7, assento ID 119.
BBFFBBFRLL: linha 102, coluna 4, assento ID 820.
Para verificar a integridade, dê uma olhada em sua lista de cartões de embarque. Qual é a identificação de assento mais alta em um cartão de embarque?