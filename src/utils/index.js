export const UUID = () => {
  const head = Date.now().toString(36)
  const tail = Math.random().toString(36).substr(2)
  return head + tail
}

export const pickUpAddress = [
  {
    id: 1,
    title: 'pickupAddress',
    address: '13350 Dallas Pkwy Dallas, TX 75240 United States',
  },
]

export const productsData = [
  { id: 1, name: 'T-Shirt' },
  { id: 2, name: 'Shoes' },
  { id: 3, name: 'Pants' },
  { id: 4, name: 'Dress' },
  { id: 5, name: 'Jackets' },
  { id: 6, name: 'Dress shirt' },
  { id: 7, name: 'Sun glasses' },
  { id: 8, name: 'Shorts' },
  { id: 9, name: 'Socks' },
  { id: 10, name: 'Hats' },
  { id: 11, name: 'Underwear' },
  { id: 12, name: 'Belt' },
  { id: 13, name: 'Tie' },
  { id: 14, name: 'Scarf' },
  { id: 15, name: 'Gloves' },
  { id: 16, name: 'Jewelry' },
  { id: 17, name: 'Watch' },
  { id: 18, name: 'Wallet' },
  { id: 19, name: 'Purse' },
  { id: 20, name: 'Backpack' },
  { id: 21, name: 'Suitcase' },
  { id: 22, name: 'Luggage' },
  { id: 23, name: 'Other' },
]

export const storesData = [
  {
    id: 1,
    name: 'A|X Armani Exchange',
    phone: '(713) 850-1995',
  },
  {
    id: 2,
    name: 'Abercrombie & Fitch',
    phone: '(713) 621-6453',
  },
  {
    id: 3,
    name: 'Aerie',
    phone: '(713) 848-9648',
  },
  {
    id: 4,
    name: 'Aeropostale',
    phone: '(713) 963-8845',
  },
  {
    id: 5,
    name: 'Aesop',
    phone: '(346) 293-8176',
  },
  {
    id: 6,
    name: 'AGENDA',
    phone: '(281) 990-3229',
  },
  {
    id: 7,
    name: 'Aldo',
    phone: '(713) 961-5922',
  },
  {
    id: 8,
    name: 'Aldo Accessories',
    phone: '(713) 439-0637',
  },
  {
    id: 9,
    name: 'Alexander McQueen',
    phone: '(713) 627-0500',
  },
  {
    id: 10,
    name: 'AllSaints',
    phone: '(713) 481-0066',
  },

  {
    id: 11,
    name: 'Ann Taylor',
    phone: '(713) 627-3722',
  },
  {
    id: 12,
    name: 'Aritzia',
    phone: '(713) 621-8661',
  },
  {
    id: 13,
    name: 'ATHLETA',
    phone: '(713) 850-0013',
  },
  {
    id: 14,
    name: 'Balenciaga',
    phone: '(346) 426-3150',
  },
  {
    id: 15,
    name: 'Balmain',
    phone: '(713) 621-7100',
  },
  {
    id: 16,
    name: 'Bally',
    phone: '(346) 330-4445',
  },
  {
    id: 17,
    name: 'Banana Republic',
    phone: '(713) 621-4451',
  },
  {
    id: 18,
    name: 'Bath & Body Works',
    phone: '(713) 621-5802',
  },
  {
    id: 19,
    name: 'Buckle',
    phone: '(713) 355-4593',
  },
  {
    id: 20,
    name: 'Burberry',
    phone: '(713) 629-6900',
  },
  {
    id: 21,
    name: 'Calvin Klein',
    phone: '(713) 552-0634',
  },
  {
    id: 22,
    name: 'CELINE',
    phone: '(713) 850-1285',
  },
  {
    id: 23,
    name: 'Champs Sports',
    phone: '713 993-9556',
  },
  {
    id: 24,
    name: 'Chloé',
    phone: '(713) 627-0500',
  },
  {
    id: 25,
    name: 'Christian Louboutin',
    phone: '(713) 255-0252',
  },
  {
    id: 26,
    name: "Claire's",
    phone: '(713) 572-4743',
  },
  {
    id: 27,
    name: 'Club Monaco',
    phone: '(713) 961-0010',
  },
  {
    id: 28,
    name: 'Coach',
    phone: '(713) 622-1705',
  },
  {
    id: 29,
    name: 'Cole Haan',
    phone: '(713) 877-0020',
  },
  {
    id: 30,
    name: 'Dior',
    phone: '(346) 646-3211',
  },
  {
    id: 31,
    name: 'Dolce & Gabbana',
    phone: '(713) 627-0050',
  },
  {
    id: 32,
    name: 'ECCO',
    phone: '(713) 888-0014',
  },
  {
    id: 33,
    name: 'Elite Fashion Boutique',
    phone: '(832) 409-6635',
  },
  {
    id: 34,
    name: 'Express',
    phone: '(713) 629-7199',
  },
  {
    id: 35,
    name: 'Fabletics',
    phone: '(346) 704-2379',
  },
  {
    id: 36,
    name: 'Fendi',
    phone: '(713) 369-0545',
  },
  {
    id: 37,
    name: 'Finish Line',
    phone: '(832) 667-4200',
  },
  {
    id: 38,
    name: 'Foot Locker',
    phone: '(713) 621-7238',
  },
  {
    id: 39,
    name: 'Forever 21',
    phone: '(713) 576-3720',
  },
  {
    id: 40,
    name: 'Fossil',
    phone: '(713) 960-9131',
  },
  {
    id: 41,
    name: 'Free People',
    phone: '(713) 439-0307',
  },
  {
    id: 42,
    name: 'G-Star RAW',
    phone: '(713) 993-0500',
  },
  {
    id: 43,
    name: 'GAP',
    phone: '(713) 626-8191',
  },
  {
    id: 44,
    name: 'GapKids',
    phone: '(713) 626-8191',
  },
  {
    id: 45,
    name: 'Giorgio Armani',
    phone: '(713) 961-2659',
  },
  {
    id: 46,
    name: 'Givenchy',
    phone: '(713) 850-0055',
  },
  {
    id: 47,
    name: 'Gucci',
    phone: '(713) 961-0778',
  },
  {
    id: 48,
    name: 'Guess',
    phone: '(713) 850-0055',
  },
  {
    id: 49,
    name: 'H&M',
    phone: '(713) 300-0880',
  },
  {
    id: 50,
    name: 'Hot Topic',
    phone: '(713) 850-9030',
  },
  {
    id: 51,
    name: 'INDOCHINO',
    phone: '(346) 360-1755',
  },
  {
    id: 52,
    name: 'J. Jill',
    phone: '(713) 622-6863',
  },
  {
    id: 53,
    name: 'J.Crew',
    phone: '(713) 840-9745',
  },
  {
    id: 54,
    name: 'Janie and Jack',
    phone: '(713) 599-1686',
  },
  {
    id: 55,
    name: 'Jimmy Choo',
    phone: '(713) 621-9404',
  },
  {
    id: 56,
    name: 'Johnston & Murphy',
    phone: '(713) 961-0025',
  },
  {
    id: 57,
    name: 'Journeys',
    phone: '(713) 961-0300',
  },
  {
    id: 58,
    name: 'Journeys Kidz',
    phone: '(713) 621-5622',
  },
  {
    id: 59,
    name: 'Kate Spade New York',
    phone: '(713) 360-6076',
  },
  {
    id: 60,
    name: 'Kenzo',
    phone: '(713) 621-7100',
  },
  {
    id: 61,
    name: 'LACOSTE',
    phone: '(346) 214-0308',
  },
  {
    id: 62,
    name: 'Lady M Cake Boutique',
    phone: '(212) 452-2222',
  },
  {
    id: 63,
    name: 'Lafayette 148 New York',
    phone: '(832) 581-3262',
  },
  {
    id: 64,
    name: 'Lids',
    phone: '(713) 961-7464',
  },
  {
    id: 65,
    name: 'LOFT',
    phone: '(713) 850-1801',
  },
  {
    id: 66,
    name: 'LOEWE',
    phone: '(713) 627-0500',
  },
  {
    id: 67,
    name: 'Loro Piana',
    phone: '(713) 888-0600',
  },
  {
    id: 68,
    name: 'Louis Vuitton',
    phone: '(713) 960-0707',
  },
  {
    id: 69,
    name: 'Lucky Brand Jeans',
    phone: '(713) 622-3901',
  },
  {
    id: 70,
    name: 'Lululemon',
    phone: '(281) 801-9835',
  },
  {
    id: 71,
    name: "Macy's",
    phone: '(832) 667-4200',
  },
  {
    id: 72,
    name: 'Maje',
    phone: '(346) 293-9103',
  },
  {
    id: 73,
    name: 'Marc Jacobs',
    phone: '(346) 362-4300',
  },
  {
    id: 74,
    name: 'Michael Kors',
    phone: '(713) 629-7200',
  },
  {
    id: 75,
    name: 'MCM',
    phone: '(281) 378-3353',
  },
  {
    id: 76,
    name: 'MONCLER',
    phone: '(281) 247-5221',
  },
  {
    id: 77,
    name: 'Neman Marcus',
    phone: '(713) 621-7100',
  },
  {
    id: 78,
    name: 'Nike',
    phone: '(713) 850-0441',
  },
  {
    id: 79,
    name: 'Nordstrom',
    phone: '(832) 201-2700',
  },
  {
    id: 80,
    name: 'Omega Boutique',
    phone: '(713) 621-1122',
  },
  {
    name: 'Pacsun',
    phone: '(713) 871-8409',
  },
  {
    id: 81,
    name: 'Panerai',
    phone: '(281) 661-3802',
  },
  {
    id: 82,
    name: 'Pure',
    phone: '(713) 621-7873',
  },
  {
    id: 83,
    name: 'Rag & Bone',
    phone: '(346) 222-3054',
  },
  {
    id: 84,
    name: 'Ralph Lauren',
    phone: '(713) 552-1254',
  },
  {
    id: 85,
    name: 'Saks Fifth Avenue',
    phone: '(713) 627-0500',
  },
  {
    id: 86,
    name: 'Saint Laurent',
    phone: '(713) 840-7006',
  },
  {
    id: 87,
    name: 'American Eagle Outfitters',
    phone: '(713) 622-6057',
  },
]

export const businessStores = [
  ...storesData.map((store) => ({ id: store.id, name: store.name })),
]
console.log(businessStores, 'businessStores')
