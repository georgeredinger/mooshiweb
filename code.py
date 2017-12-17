f = file('data')
data = []
seqnum = 0
for line in f:
    vals = map(lambda s: int(s, 16), line.split())
    print(vals)
    if vals[0] != seqnum:
        raise(exceptions.BaseException('sequence incorrect'))
    data = data + vals[1:]
    seqnum += 1

res = zlib.decompress(''.join(map(chr, data))[3:])
# First 3 bytes are 0x01 0xb0 0x01 but unknown meaning
# Length of data is 432= 0x1b0 - is 0x01 seqnum?
