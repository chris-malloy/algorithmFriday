sortedleft = []
sortedright = []

a = [6, 4, 1, 2, 5, 3]

pivot = a[-1]

for i in range(len(a)):
    if pivot >= a[i]:
        sortedleft.append(a[i])
    elif pivot < a[i]:
        sortedright.append(a[i])

swapped = True;
while swapped:
    swapped = False
    for j in range (len(sortedright)-1):
        if sortedright[j] > sortedright[j+1]:
                    temp = sortedright[j+1]
                    sortedright[j+1] = sortedright[j]
                    sortedright[j] = temp
                    swapped = True
swapped = True;
while swapped:
    swapped = False
    for z in range (len(sortedleft)-1):
        if sortedleft[z] > sortedleft[z+1]:
                    temp = sortedright[z+1]
                    sortedleft[z+1] = sortedleft[z]
                    sortedleft[z] = temp
                    swapped = True

sortedfull = sortedleft + sortedright
print sortedfull