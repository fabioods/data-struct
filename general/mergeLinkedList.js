var mergeTwoLists = function (list1, list2) {
  // Cria um nó fictício para simplificar a construção da lista
  let dummy = new ListNode();
  let current = dummy;

  // Enquanto houver elementos em qualquer uma das listas
  while (list1 !== null && list2 !== null) {
    // Comparar os valores dos nós atuais
    if (list1.val < list2.val) {
      current.next = list1; // Conecta o nó de list1
      list1 = list1.next; // Avança para o próximo nó de list1
    } else {
      current.next = list2; // Conecta o nó de list2
      list2 = list2.next; // Avança para o próximo nó de list2
    }
    current = current.next; // Avança para o próximo nó da lista resultante
  }

  // Se houver elementos restantes em list1 ou list2, conecta-os à lista resultante
  if (list1 !== null) {
    current.next = list1;
  } else {
    current.next = list2;
  }

  return dummy.next; // Retorna a lista mesclada, que começa após o nó fictício
};
