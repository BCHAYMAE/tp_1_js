/*
Un commerce vend trois articles : 2 clés USB à 85 DH, 3 cahiers à 18 DH et 1 souris à 120 DH. Une remise
de 8 % est appliquée sur le total des articles. Les frais de livraison sont de 35 DH (hors taxes). La TVA de
20 % s’applique au total après remise, livraison comprise. Le client verse un acompte de 100 DH.
• Déclarer toutes les quantités, tous les prix unitaires ainsi que les taux et les frais.
• Calculer les sous-totaux par article, le montant brut HT et la remise.
• Calculer le montant net HT après remise, ajouter la livraison, puis calculer la TVA et le total TTC.
• Déduire l’acompte et afficher le solde à payer. Présenter chaque montant avec deux décimales.
Exemple de résultat : Brut HT = 344.00 DH ; remise = 27.52 DH ; base TVA = 351.48 DH ; TVA = 70.30 DH ; TTC =
421.78 DH ; solde = 321.78 DH.
*/

let qte1 = 2;
let prix1 = 85;
let qte2 = 3;
let prix2 = 18;
let qte3 = 1;
let prix3 = 120;
let remise = 0.08;
let livraison = 35;
let tva = 0.2;
let acompte = 100;

let sous_total1 = qte1 * prix1;
let sous_total2 = qte2 * prix2;
let sous_total3 = qte3 * prix3;

let brut_HT = sous_total1 + sous_total2 + sous_total3;
let montant_remise = brut_HT * remise;
let net_HT = brut_HT - montant_remise + livraison;
let montant_TVA = net_HT * tva;
let total_TTC = net_HT + montant_TVA;
let solde_a_payer = total_TTC - acompte;

console.log(`Brut HT = ${brut_HT.toFixed(2)} DH ; remise = ${montant_remise.toFixed(2)} DH ; base TVA = ${net_HT.toFixed(2)} DH ; TVA = ${montant_TVA.toFixed(2)} DH ; TTC = ${total_TTC.toFixed(2)} DH ; solde = ${solde_a_payer.toFixed(2)} DH.`);