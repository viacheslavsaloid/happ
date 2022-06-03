
export function copyMetadata(targetFrom, targetTo) {
  for (const metadataKey of Reflect.getMetadataKeys(targetFrom)) {
    Reflect.defineMetadata(metadataKey, Reflect.getOwnMetadata(metadataKey, targetFrom), targetTo)
  }
}
