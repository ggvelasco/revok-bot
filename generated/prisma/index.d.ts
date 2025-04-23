
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model GuildConfig
 * 
 */
export type GuildConfig = $Result.DefaultSelection<Prisma.$GuildConfigPayload>
/**
 * Model ReactionRole
 * 
 */
export type ReactionRole = $Result.DefaultSelection<Prisma.$ReactionRolePayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more GuildConfigs
 * const guildConfigs = await prisma.guildConfig.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more GuildConfigs
   * const guildConfigs = await prisma.guildConfig.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.guildConfig`: Exposes CRUD operations for the **GuildConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GuildConfigs
    * const guildConfigs = await prisma.guildConfig.findMany()
    * ```
    */
  get guildConfig(): Prisma.GuildConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reactionRole`: Exposes CRUD operations for the **ReactionRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReactionRoles
    * const reactionRoles = await prisma.reactionRole.findMany()
    * ```
    */
  get reactionRole(): Prisma.ReactionRoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    GuildConfig: 'GuildConfig',
    ReactionRole: 'ReactionRole',
    Ticket: 'Ticket'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "guildConfig" | "reactionRole" | "ticket"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      GuildConfig: {
        payload: Prisma.$GuildConfigPayload<ExtArgs>
        fields: Prisma.GuildConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuildConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuildConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload>
          }
          findFirst: {
            args: Prisma.GuildConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuildConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload>
          }
          findMany: {
            args: Prisma.GuildConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload>[]
          }
          create: {
            args: Prisma.GuildConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload>
          }
          createMany: {
            args: Prisma.GuildConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuildConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload>[]
          }
          delete: {
            args: Prisma.GuildConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload>
          }
          update: {
            args: Prisma.GuildConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload>
          }
          deleteMany: {
            args: Prisma.GuildConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuildConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GuildConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload>[]
          }
          upsert: {
            args: Prisma.GuildConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload>
          }
          aggregate: {
            args: Prisma.GuildConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuildConfig>
          }
          groupBy: {
            args: Prisma.GuildConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuildConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuildConfigCountArgs<ExtArgs>
            result: $Utils.Optional<GuildConfigCountAggregateOutputType> | number
          }
        }
      }
      ReactionRole: {
        payload: Prisma.$ReactionRolePayload<ExtArgs>
        fields: Prisma.ReactionRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReactionRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReactionRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionRolePayload>
          }
          findFirst: {
            args: Prisma.ReactionRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReactionRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionRolePayload>
          }
          findMany: {
            args: Prisma.ReactionRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionRolePayload>[]
          }
          create: {
            args: Prisma.ReactionRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionRolePayload>
          }
          createMany: {
            args: Prisma.ReactionRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReactionRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionRolePayload>[]
          }
          delete: {
            args: Prisma.ReactionRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionRolePayload>
          }
          update: {
            args: Prisma.ReactionRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionRolePayload>
          }
          deleteMany: {
            args: Prisma.ReactionRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReactionRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReactionRoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionRolePayload>[]
          }
          upsert: {
            args: Prisma.ReactionRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionRolePayload>
          }
          aggregate: {
            args: Prisma.ReactionRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReactionRole>
          }
          groupBy: {
            args: Prisma.ReactionRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReactionRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReactionRoleCountArgs<ExtArgs>
            result: $Utils.Optional<ReactionRoleCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    guildConfig?: GuildConfigOmit
    reactionRole?: ReactionRoleOmit
    ticket?: TicketOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model GuildConfig
   */

  export type AggregateGuildConfig = {
    _count: GuildConfigCountAggregateOutputType | null
    _min: GuildConfigMinAggregateOutputType | null
    _max: GuildConfigMaxAggregateOutputType | null
  }

  export type GuildConfigMinAggregateOutputType = {
    guildId: string | null
    prefix: string | null
    staffRoleId: string | null
    logChannelId: string | null
    language: string | null
    welcomeChannelId: string | null
    welcomeMessage: string | null
    goodbyeChannelId: string | null
    goodbyeMessage: string | null
    autoRoleId: string | null
  }

  export type GuildConfigMaxAggregateOutputType = {
    guildId: string | null
    prefix: string | null
    staffRoleId: string | null
    logChannelId: string | null
    language: string | null
    welcomeChannelId: string | null
    welcomeMessage: string | null
    goodbyeChannelId: string | null
    goodbyeMessage: string | null
    autoRoleId: string | null
  }

  export type GuildConfigCountAggregateOutputType = {
    guildId: number
    prefix: number
    staffRoleId: number
    logChannelId: number
    language: number
    welcomeChannelId: number
    welcomeMessage: number
    goodbyeChannelId: number
    goodbyeMessage: number
    autoRoleId: number
    disabledCommands: number
    _all: number
  }


  export type GuildConfigMinAggregateInputType = {
    guildId?: true
    prefix?: true
    staffRoleId?: true
    logChannelId?: true
    language?: true
    welcomeChannelId?: true
    welcomeMessage?: true
    goodbyeChannelId?: true
    goodbyeMessage?: true
    autoRoleId?: true
  }

  export type GuildConfigMaxAggregateInputType = {
    guildId?: true
    prefix?: true
    staffRoleId?: true
    logChannelId?: true
    language?: true
    welcomeChannelId?: true
    welcomeMessage?: true
    goodbyeChannelId?: true
    goodbyeMessage?: true
    autoRoleId?: true
  }

  export type GuildConfigCountAggregateInputType = {
    guildId?: true
    prefix?: true
    staffRoleId?: true
    logChannelId?: true
    language?: true
    welcomeChannelId?: true
    welcomeMessage?: true
    goodbyeChannelId?: true
    goodbyeMessage?: true
    autoRoleId?: true
    disabledCommands?: true
    _all?: true
  }

  export type GuildConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuildConfig to aggregate.
     */
    where?: GuildConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuildConfigs to fetch.
     */
    orderBy?: GuildConfigOrderByWithRelationInput | GuildConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuildConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuildConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuildConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GuildConfigs
    **/
    _count?: true | GuildConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuildConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuildConfigMaxAggregateInputType
  }

  export type GetGuildConfigAggregateType<T extends GuildConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateGuildConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuildConfig[P]>
      : GetScalarType<T[P], AggregateGuildConfig[P]>
  }




  export type GuildConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuildConfigWhereInput
    orderBy?: GuildConfigOrderByWithAggregationInput | GuildConfigOrderByWithAggregationInput[]
    by: GuildConfigScalarFieldEnum[] | GuildConfigScalarFieldEnum
    having?: GuildConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuildConfigCountAggregateInputType | true
    _min?: GuildConfigMinAggregateInputType
    _max?: GuildConfigMaxAggregateInputType
  }

  export type GuildConfigGroupByOutputType = {
    guildId: string
    prefix: string
    staffRoleId: string | null
    logChannelId: string | null
    language: string
    welcomeChannelId: string | null
    welcomeMessage: string | null
    goodbyeChannelId: string | null
    goodbyeMessage: string | null
    autoRoleId: string | null
    disabledCommands: string[]
    _count: GuildConfigCountAggregateOutputType | null
    _min: GuildConfigMinAggregateOutputType | null
    _max: GuildConfigMaxAggregateOutputType | null
  }

  type GetGuildConfigGroupByPayload<T extends GuildConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuildConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuildConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuildConfigGroupByOutputType[P]>
            : GetScalarType<T[P], GuildConfigGroupByOutputType[P]>
        }
      >
    >


  export type GuildConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    guildId?: boolean
    prefix?: boolean
    staffRoleId?: boolean
    logChannelId?: boolean
    language?: boolean
    welcomeChannelId?: boolean
    welcomeMessage?: boolean
    goodbyeChannelId?: boolean
    goodbyeMessage?: boolean
    autoRoleId?: boolean
    disabledCommands?: boolean
  }, ExtArgs["result"]["guildConfig"]>

  export type GuildConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    guildId?: boolean
    prefix?: boolean
    staffRoleId?: boolean
    logChannelId?: boolean
    language?: boolean
    welcomeChannelId?: boolean
    welcomeMessage?: boolean
    goodbyeChannelId?: boolean
    goodbyeMessage?: boolean
    autoRoleId?: boolean
    disabledCommands?: boolean
  }, ExtArgs["result"]["guildConfig"]>

  export type GuildConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    guildId?: boolean
    prefix?: boolean
    staffRoleId?: boolean
    logChannelId?: boolean
    language?: boolean
    welcomeChannelId?: boolean
    welcomeMessage?: boolean
    goodbyeChannelId?: boolean
    goodbyeMessage?: boolean
    autoRoleId?: boolean
    disabledCommands?: boolean
  }, ExtArgs["result"]["guildConfig"]>

  export type GuildConfigSelectScalar = {
    guildId?: boolean
    prefix?: boolean
    staffRoleId?: boolean
    logChannelId?: boolean
    language?: boolean
    welcomeChannelId?: boolean
    welcomeMessage?: boolean
    goodbyeChannelId?: boolean
    goodbyeMessage?: boolean
    autoRoleId?: boolean
    disabledCommands?: boolean
  }

  export type GuildConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"guildId" | "prefix" | "staffRoleId" | "logChannelId" | "language" | "welcomeChannelId" | "welcomeMessage" | "goodbyeChannelId" | "goodbyeMessage" | "autoRoleId" | "disabledCommands", ExtArgs["result"]["guildConfig"]>

  export type $GuildConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GuildConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      guildId: string
      prefix: string
      staffRoleId: string | null
      logChannelId: string | null
      language: string
      welcomeChannelId: string | null
      welcomeMessage: string | null
      goodbyeChannelId: string | null
      goodbyeMessage: string | null
      autoRoleId: string | null
      disabledCommands: string[]
    }, ExtArgs["result"]["guildConfig"]>
    composites: {}
  }

  type GuildConfigGetPayload<S extends boolean | null | undefined | GuildConfigDefaultArgs> = $Result.GetResult<Prisma.$GuildConfigPayload, S>

  type GuildConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuildConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuildConfigCountAggregateInputType | true
    }

  export interface GuildConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GuildConfig'], meta: { name: 'GuildConfig' } }
    /**
     * Find zero or one GuildConfig that matches the filter.
     * @param {GuildConfigFindUniqueArgs} args - Arguments to find a GuildConfig
     * @example
     * // Get one GuildConfig
     * const guildConfig = await prisma.guildConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuildConfigFindUniqueArgs>(args: SelectSubset<T, GuildConfigFindUniqueArgs<ExtArgs>>): Prisma__GuildConfigClient<$Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GuildConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuildConfigFindUniqueOrThrowArgs} args - Arguments to find a GuildConfig
     * @example
     * // Get one GuildConfig
     * const guildConfig = await prisma.guildConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuildConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, GuildConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuildConfigClient<$Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuildConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildConfigFindFirstArgs} args - Arguments to find a GuildConfig
     * @example
     * // Get one GuildConfig
     * const guildConfig = await prisma.guildConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuildConfigFindFirstArgs>(args?: SelectSubset<T, GuildConfigFindFirstArgs<ExtArgs>>): Prisma__GuildConfigClient<$Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuildConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildConfigFindFirstOrThrowArgs} args - Arguments to find a GuildConfig
     * @example
     * // Get one GuildConfig
     * const guildConfig = await prisma.guildConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuildConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, GuildConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuildConfigClient<$Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GuildConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GuildConfigs
     * const guildConfigs = await prisma.guildConfig.findMany()
     * 
     * // Get first 10 GuildConfigs
     * const guildConfigs = await prisma.guildConfig.findMany({ take: 10 })
     * 
     * // Only select the `guildId`
     * const guildConfigWithGuildIdOnly = await prisma.guildConfig.findMany({ select: { guildId: true } })
     * 
     */
    findMany<T extends GuildConfigFindManyArgs>(args?: SelectSubset<T, GuildConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GuildConfig.
     * @param {GuildConfigCreateArgs} args - Arguments to create a GuildConfig.
     * @example
     * // Create one GuildConfig
     * const GuildConfig = await prisma.guildConfig.create({
     *   data: {
     *     // ... data to create a GuildConfig
     *   }
     * })
     * 
     */
    create<T extends GuildConfigCreateArgs>(args: SelectSubset<T, GuildConfigCreateArgs<ExtArgs>>): Prisma__GuildConfigClient<$Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GuildConfigs.
     * @param {GuildConfigCreateManyArgs} args - Arguments to create many GuildConfigs.
     * @example
     * // Create many GuildConfigs
     * const guildConfig = await prisma.guildConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuildConfigCreateManyArgs>(args?: SelectSubset<T, GuildConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GuildConfigs and returns the data saved in the database.
     * @param {GuildConfigCreateManyAndReturnArgs} args - Arguments to create many GuildConfigs.
     * @example
     * // Create many GuildConfigs
     * const guildConfig = await prisma.guildConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GuildConfigs and only return the `guildId`
     * const guildConfigWithGuildIdOnly = await prisma.guildConfig.createManyAndReturn({
     *   select: { guildId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuildConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, GuildConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GuildConfig.
     * @param {GuildConfigDeleteArgs} args - Arguments to delete one GuildConfig.
     * @example
     * // Delete one GuildConfig
     * const GuildConfig = await prisma.guildConfig.delete({
     *   where: {
     *     // ... filter to delete one GuildConfig
     *   }
     * })
     * 
     */
    delete<T extends GuildConfigDeleteArgs>(args: SelectSubset<T, GuildConfigDeleteArgs<ExtArgs>>): Prisma__GuildConfigClient<$Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GuildConfig.
     * @param {GuildConfigUpdateArgs} args - Arguments to update one GuildConfig.
     * @example
     * // Update one GuildConfig
     * const guildConfig = await prisma.guildConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuildConfigUpdateArgs>(args: SelectSubset<T, GuildConfigUpdateArgs<ExtArgs>>): Prisma__GuildConfigClient<$Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GuildConfigs.
     * @param {GuildConfigDeleteManyArgs} args - Arguments to filter GuildConfigs to delete.
     * @example
     * // Delete a few GuildConfigs
     * const { count } = await prisma.guildConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuildConfigDeleteManyArgs>(args?: SelectSubset<T, GuildConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuildConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GuildConfigs
     * const guildConfig = await prisma.guildConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuildConfigUpdateManyArgs>(args: SelectSubset<T, GuildConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuildConfigs and returns the data updated in the database.
     * @param {GuildConfigUpdateManyAndReturnArgs} args - Arguments to update many GuildConfigs.
     * @example
     * // Update many GuildConfigs
     * const guildConfig = await prisma.guildConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GuildConfigs and only return the `guildId`
     * const guildConfigWithGuildIdOnly = await prisma.guildConfig.updateManyAndReturn({
     *   select: { guildId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GuildConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, GuildConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GuildConfig.
     * @param {GuildConfigUpsertArgs} args - Arguments to update or create a GuildConfig.
     * @example
     * // Update or create a GuildConfig
     * const guildConfig = await prisma.guildConfig.upsert({
     *   create: {
     *     // ... data to create a GuildConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GuildConfig we want to update
     *   }
     * })
     */
    upsert<T extends GuildConfigUpsertArgs>(args: SelectSubset<T, GuildConfigUpsertArgs<ExtArgs>>): Prisma__GuildConfigClient<$Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GuildConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildConfigCountArgs} args - Arguments to filter GuildConfigs to count.
     * @example
     * // Count the number of GuildConfigs
     * const count = await prisma.guildConfig.count({
     *   where: {
     *     // ... the filter for the GuildConfigs we want to count
     *   }
     * })
    **/
    count<T extends GuildConfigCountArgs>(
      args?: Subset<T, GuildConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuildConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GuildConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GuildConfigAggregateArgs>(args: Subset<T, GuildConfigAggregateArgs>): Prisma.PrismaPromise<GetGuildConfigAggregateType<T>>

    /**
     * Group by GuildConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GuildConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuildConfigGroupByArgs['orderBy'] }
        : { orderBy?: GuildConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GuildConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuildConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GuildConfig model
   */
  readonly fields: GuildConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GuildConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuildConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GuildConfig model
   */
  interface GuildConfigFieldRefs {
    readonly guildId: FieldRef<"GuildConfig", 'String'>
    readonly prefix: FieldRef<"GuildConfig", 'String'>
    readonly staffRoleId: FieldRef<"GuildConfig", 'String'>
    readonly logChannelId: FieldRef<"GuildConfig", 'String'>
    readonly language: FieldRef<"GuildConfig", 'String'>
    readonly welcomeChannelId: FieldRef<"GuildConfig", 'String'>
    readonly welcomeMessage: FieldRef<"GuildConfig", 'String'>
    readonly goodbyeChannelId: FieldRef<"GuildConfig", 'String'>
    readonly goodbyeMessage: FieldRef<"GuildConfig", 'String'>
    readonly autoRoleId: FieldRef<"GuildConfig", 'String'>
    readonly disabledCommands: FieldRef<"GuildConfig", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * GuildConfig findUnique
   */
  export type GuildConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null
    /**
     * Filter, which GuildConfig to fetch.
     */
    where: GuildConfigWhereUniqueInput
  }

  /**
   * GuildConfig findUniqueOrThrow
   */
  export type GuildConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null
    /**
     * Filter, which GuildConfig to fetch.
     */
    where: GuildConfigWhereUniqueInput
  }

  /**
   * GuildConfig findFirst
   */
  export type GuildConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null
    /**
     * Filter, which GuildConfig to fetch.
     */
    where?: GuildConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuildConfigs to fetch.
     */
    orderBy?: GuildConfigOrderByWithRelationInput | GuildConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuildConfigs.
     */
    cursor?: GuildConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuildConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuildConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuildConfigs.
     */
    distinct?: GuildConfigScalarFieldEnum | GuildConfigScalarFieldEnum[]
  }

  /**
   * GuildConfig findFirstOrThrow
   */
  export type GuildConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null
    /**
     * Filter, which GuildConfig to fetch.
     */
    where?: GuildConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuildConfigs to fetch.
     */
    orderBy?: GuildConfigOrderByWithRelationInput | GuildConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuildConfigs.
     */
    cursor?: GuildConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuildConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuildConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuildConfigs.
     */
    distinct?: GuildConfigScalarFieldEnum | GuildConfigScalarFieldEnum[]
  }

  /**
   * GuildConfig findMany
   */
  export type GuildConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null
    /**
     * Filter, which GuildConfigs to fetch.
     */
    where?: GuildConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuildConfigs to fetch.
     */
    orderBy?: GuildConfigOrderByWithRelationInput | GuildConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GuildConfigs.
     */
    cursor?: GuildConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuildConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuildConfigs.
     */
    skip?: number
    distinct?: GuildConfigScalarFieldEnum | GuildConfigScalarFieldEnum[]
  }

  /**
   * GuildConfig create
   */
  export type GuildConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null
    /**
     * The data needed to create a GuildConfig.
     */
    data: XOR<GuildConfigCreateInput, GuildConfigUncheckedCreateInput>
  }

  /**
   * GuildConfig createMany
   */
  export type GuildConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GuildConfigs.
     */
    data: GuildConfigCreateManyInput | GuildConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GuildConfig createManyAndReturn
   */
  export type GuildConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null
    /**
     * The data used to create many GuildConfigs.
     */
    data: GuildConfigCreateManyInput | GuildConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GuildConfig update
   */
  export type GuildConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null
    /**
     * The data needed to update a GuildConfig.
     */
    data: XOR<GuildConfigUpdateInput, GuildConfigUncheckedUpdateInput>
    /**
     * Choose, which GuildConfig to update.
     */
    where: GuildConfigWhereUniqueInput
  }

  /**
   * GuildConfig updateMany
   */
  export type GuildConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GuildConfigs.
     */
    data: XOR<GuildConfigUpdateManyMutationInput, GuildConfigUncheckedUpdateManyInput>
    /**
     * Filter which GuildConfigs to update
     */
    where?: GuildConfigWhereInput
    /**
     * Limit how many GuildConfigs to update.
     */
    limit?: number
  }

  /**
   * GuildConfig updateManyAndReturn
   */
  export type GuildConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null
    /**
     * The data used to update GuildConfigs.
     */
    data: XOR<GuildConfigUpdateManyMutationInput, GuildConfigUncheckedUpdateManyInput>
    /**
     * Filter which GuildConfigs to update
     */
    where?: GuildConfigWhereInput
    /**
     * Limit how many GuildConfigs to update.
     */
    limit?: number
  }

  /**
   * GuildConfig upsert
   */
  export type GuildConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null
    /**
     * The filter to search for the GuildConfig to update in case it exists.
     */
    where: GuildConfigWhereUniqueInput
    /**
     * In case the GuildConfig found by the `where` argument doesn't exist, create a new GuildConfig with this data.
     */
    create: XOR<GuildConfigCreateInput, GuildConfigUncheckedCreateInput>
    /**
     * In case the GuildConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuildConfigUpdateInput, GuildConfigUncheckedUpdateInput>
  }

  /**
   * GuildConfig delete
   */
  export type GuildConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null
    /**
     * Filter which GuildConfig to delete.
     */
    where: GuildConfigWhereUniqueInput
  }

  /**
   * GuildConfig deleteMany
   */
  export type GuildConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuildConfigs to delete
     */
    where?: GuildConfigWhereInput
    /**
     * Limit how many GuildConfigs to delete.
     */
    limit?: number
  }

  /**
   * GuildConfig without action
   */
  export type GuildConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null
  }


  /**
   * Model ReactionRole
   */

  export type AggregateReactionRole = {
    _count: ReactionRoleCountAggregateOutputType | null
    _avg: ReactionRoleAvgAggregateOutputType | null
    _sum: ReactionRoleSumAggregateOutputType | null
    _min: ReactionRoleMinAggregateOutputType | null
    _max: ReactionRoleMaxAggregateOutputType | null
  }

  export type ReactionRoleAvgAggregateOutputType = {
    id: number | null
  }

  export type ReactionRoleSumAggregateOutputType = {
    id: number | null
  }

  export type ReactionRoleMinAggregateOutputType = {
    id: number | null
    guildId: string | null
    messageId: string | null
    emoji: string | null
    roleId: string | null
  }

  export type ReactionRoleMaxAggregateOutputType = {
    id: number | null
    guildId: string | null
    messageId: string | null
    emoji: string | null
    roleId: string | null
  }

  export type ReactionRoleCountAggregateOutputType = {
    id: number
    guildId: number
    messageId: number
    emoji: number
    roleId: number
    _all: number
  }


  export type ReactionRoleAvgAggregateInputType = {
    id?: true
  }

  export type ReactionRoleSumAggregateInputType = {
    id?: true
  }

  export type ReactionRoleMinAggregateInputType = {
    id?: true
    guildId?: true
    messageId?: true
    emoji?: true
    roleId?: true
  }

  export type ReactionRoleMaxAggregateInputType = {
    id?: true
    guildId?: true
    messageId?: true
    emoji?: true
    roleId?: true
  }

  export type ReactionRoleCountAggregateInputType = {
    id?: true
    guildId?: true
    messageId?: true
    emoji?: true
    roleId?: true
    _all?: true
  }

  export type ReactionRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReactionRole to aggregate.
     */
    where?: ReactionRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReactionRoles to fetch.
     */
    orderBy?: ReactionRoleOrderByWithRelationInput | ReactionRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReactionRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReactionRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReactionRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReactionRoles
    **/
    _count?: true | ReactionRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReactionRoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReactionRoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReactionRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReactionRoleMaxAggregateInputType
  }

  export type GetReactionRoleAggregateType<T extends ReactionRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateReactionRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReactionRole[P]>
      : GetScalarType<T[P], AggregateReactionRole[P]>
  }




  export type ReactionRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReactionRoleWhereInput
    orderBy?: ReactionRoleOrderByWithAggregationInput | ReactionRoleOrderByWithAggregationInput[]
    by: ReactionRoleScalarFieldEnum[] | ReactionRoleScalarFieldEnum
    having?: ReactionRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReactionRoleCountAggregateInputType | true
    _avg?: ReactionRoleAvgAggregateInputType
    _sum?: ReactionRoleSumAggregateInputType
    _min?: ReactionRoleMinAggregateInputType
    _max?: ReactionRoleMaxAggregateInputType
  }

  export type ReactionRoleGroupByOutputType = {
    id: number
    guildId: string
    messageId: string
    emoji: string
    roleId: string
    _count: ReactionRoleCountAggregateOutputType | null
    _avg: ReactionRoleAvgAggregateOutputType | null
    _sum: ReactionRoleSumAggregateOutputType | null
    _min: ReactionRoleMinAggregateOutputType | null
    _max: ReactionRoleMaxAggregateOutputType | null
  }

  type GetReactionRoleGroupByPayload<T extends ReactionRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReactionRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReactionRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReactionRoleGroupByOutputType[P]>
            : GetScalarType<T[P], ReactionRoleGroupByOutputType[P]>
        }
      >
    >


  export type ReactionRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    messageId?: boolean
    emoji?: boolean
    roleId?: boolean
  }, ExtArgs["result"]["reactionRole"]>

  export type ReactionRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    messageId?: boolean
    emoji?: boolean
    roleId?: boolean
  }, ExtArgs["result"]["reactionRole"]>

  export type ReactionRoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    messageId?: boolean
    emoji?: boolean
    roleId?: boolean
  }, ExtArgs["result"]["reactionRole"]>

  export type ReactionRoleSelectScalar = {
    id?: boolean
    guildId?: boolean
    messageId?: boolean
    emoji?: boolean
    roleId?: boolean
  }

  export type ReactionRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guildId" | "messageId" | "emoji" | "roleId", ExtArgs["result"]["reactionRole"]>

  export type $ReactionRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReactionRole"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      guildId: string
      messageId: string
      emoji: string
      roleId: string
    }, ExtArgs["result"]["reactionRole"]>
    composites: {}
  }

  type ReactionRoleGetPayload<S extends boolean | null | undefined | ReactionRoleDefaultArgs> = $Result.GetResult<Prisma.$ReactionRolePayload, S>

  type ReactionRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReactionRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReactionRoleCountAggregateInputType | true
    }

  export interface ReactionRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReactionRole'], meta: { name: 'ReactionRole' } }
    /**
     * Find zero or one ReactionRole that matches the filter.
     * @param {ReactionRoleFindUniqueArgs} args - Arguments to find a ReactionRole
     * @example
     * // Get one ReactionRole
     * const reactionRole = await prisma.reactionRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReactionRoleFindUniqueArgs>(args: SelectSubset<T, ReactionRoleFindUniqueArgs<ExtArgs>>): Prisma__ReactionRoleClient<$Result.GetResult<Prisma.$ReactionRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReactionRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReactionRoleFindUniqueOrThrowArgs} args - Arguments to find a ReactionRole
     * @example
     * // Get one ReactionRole
     * const reactionRole = await prisma.reactionRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReactionRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, ReactionRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReactionRoleClient<$Result.GetResult<Prisma.$ReactionRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReactionRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionRoleFindFirstArgs} args - Arguments to find a ReactionRole
     * @example
     * // Get one ReactionRole
     * const reactionRole = await prisma.reactionRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReactionRoleFindFirstArgs>(args?: SelectSubset<T, ReactionRoleFindFirstArgs<ExtArgs>>): Prisma__ReactionRoleClient<$Result.GetResult<Prisma.$ReactionRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReactionRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionRoleFindFirstOrThrowArgs} args - Arguments to find a ReactionRole
     * @example
     * // Get one ReactionRole
     * const reactionRole = await prisma.reactionRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReactionRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, ReactionRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReactionRoleClient<$Result.GetResult<Prisma.$ReactionRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReactionRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReactionRoles
     * const reactionRoles = await prisma.reactionRole.findMany()
     * 
     * // Get first 10 ReactionRoles
     * const reactionRoles = await prisma.reactionRole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reactionRoleWithIdOnly = await prisma.reactionRole.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReactionRoleFindManyArgs>(args?: SelectSubset<T, ReactionRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReactionRole.
     * @param {ReactionRoleCreateArgs} args - Arguments to create a ReactionRole.
     * @example
     * // Create one ReactionRole
     * const ReactionRole = await prisma.reactionRole.create({
     *   data: {
     *     // ... data to create a ReactionRole
     *   }
     * })
     * 
     */
    create<T extends ReactionRoleCreateArgs>(args: SelectSubset<T, ReactionRoleCreateArgs<ExtArgs>>): Prisma__ReactionRoleClient<$Result.GetResult<Prisma.$ReactionRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReactionRoles.
     * @param {ReactionRoleCreateManyArgs} args - Arguments to create many ReactionRoles.
     * @example
     * // Create many ReactionRoles
     * const reactionRole = await prisma.reactionRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReactionRoleCreateManyArgs>(args?: SelectSubset<T, ReactionRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReactionRoles and returns the data saved in the database.
     * @param {ReactionRoleCreateManyAndReturnArgs} args - Arguments to create many ReactionRoles.
     * @example
     * // Create many ReactionRoles
     * const reactionRole = await prisma.reactionRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReactionRoles and only return the `id`
     * const reactionRoleWithIdOnly = await prisma.reactionRole.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReactionRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, ReactionRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionRolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReactionRole.
     * @param {ReactionRoleDeleteArgs} args - Arguments to delete one ReactionRole.
     * @example
     * // Delete one ReactionRole
     * const ReactionRole = await prisma.reactionRole.delete({
     *   where: {
     *     // ... filter to delete one ReactionRole
     *   }
     * })
     * 
     */
    delete<T extends ReactionRoleDeleteArgs>(args: SelectSubset<T, ReactionRoleDeleteArgs<ExtArgs>>): Prisma__ReactionRoleClient<$Result.GetResult<Prisma.$ReactionRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReactionRole.
     * @param {ReactionRoleUpdateArgs} args - Arguments to update one ReactionRole.
     * @example
     * // Update one ReactionRole
     * const reactionRole = await prisma.reactionRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReactionRoleUpdateArgs>(args: SelectSubset<T, ReactionRoleUpdateArgs<ExtArgs>>): Prisma__ReactionRoleClient<$Result.GetResult<Prisma.$ReactionRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReactionRoles.
     * @param {ReactionRoleDeleteManyArgs} args - Arguments to filter ReactionRoles to delete.
     * @example
     * // Delete a few ReactionRoles
     * const { count } = await prisma.reactionRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReactionRoleDeleteManyArgs>(args?: SelectSubset<T, ReactionRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReactionRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReactionRoles
     * const reactionRole = await prisma.reactionRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReactionRoleUpdateManyArgs>(args: SelectSubset<T, ReactionRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReactionRoles and returns the data updated in the database.
     * @param {ReactionRoleUpdateManyAndReturnArgs} args - Arguments to update many ReactionRoles.
     * @example
     * // Update many ReactionRoles
     * const reactionRole = await prisma.reactionRole.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReactionRoles and only return the `id`
     * const reactionRoleWithIdOnly = await prisma.reactionRole.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReactionRoleUpdateManyAndReturnArgs>(args: SelectSubset<T, ReactionRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionRolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReactionRole.
     * @param {ReactionRoleUpsertArgs} args - Arguments to update or create a ReactionRole.
     * @example
     * // Update or create a ReactionRole
     * const reactionRole = await prisma.reactionRole.upsert({
     *   create: {
     *     // ... data to create a ReactionRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReactionRole we want to update
     *   }
     * })
     */
    upsert<T extends ReactionRoleUpsertArgs>(args: SelectSubset<T, ReactionRoleUpsertArgs<ExtArgs>>): Prisma__ReactionRoleClient<$Result.GetResult<Prisma.$ReactionRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReactionRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionRoleCountArgs} args - Arguments to filter ReactionRoles to count.
     * @example
     * // Count the number of ReactionRoles
     * const count = await prisma.reactionRole.count({
     *   where: {
     *     // ... the filter for the ReactionRoles we want to count
     *   }
     * })
    **/
    count<T extends ReactionRoleCountArgs>(
      args?: Subset<T, ReactionRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReactionRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReactionRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReactionRoleAggregateArgs>(args: Subset<T, ReactionRoleAggregateArgs>): Prisma.PrismaPromise<GetReactionRoleAggregateType<T>>

    /**
     * Group by ReactionRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionRoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReactionRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReactionRoleGroupByArgs['orderBy'] }
        : { orderBy?: ReactionRoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReactionRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReactionRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReactionRole model
   */
  readonly fields: ReactionRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReactionRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReactionRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReactionRole model
   */
  interface ReactionRoleFieldRefs {
    readonly id: FieldRef<"ReactionRole", 'Int'>
    readonly guildId: FieldRef<"ReactionRole", 'String'>
    readonly messageId: FieldRef<"ReactionRole", 'String'>
    readonly emoji: FieldRef<"ReactionRole", 'String'>
    readonly roleId: FieldRef<"ReactionRole", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ReactionRole findUnique
   */
  export type ReactionRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReactionRole
     */
    select?: ReactionRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReactionRole
     */
    omit?: ReactionRoleOmit<ExtArgs> | null
    /**
     * Filter, which ReactionRole to fetch.
     */
    where: ReactionRoleWhereUniqueInput
  }

  /**
   * ReactionRole findUniqueOrThrow
   */
  export type ReactionRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReactionRole
     */
    select?: ReactionRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReactionRole
     */
    omit?: ReactionRoleOmit<ExtArgs> | null
    /**
     * Filter, which ReactionRole to fetch.
     */
    where: ReactionRoleWhereUniqueInput
  }

  /**
   * ReactionRole findFirst
   */
  export type ReactionRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReactionRole
     */
    select?: ReactionRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReactionRole
     */
    omit?: ReactionRoleOmit<ExtArgs> | null
    /**
     * Filter, which ReactionRole to fetch.
     */
    where?: ReactionRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReactionRoles to fetch.
     */
    orderBy?: ReactionRoleOrderByWithRelationInput | ReactionRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReactionRoles.
     */
    cursor?: ReactionRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReactionRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReactionRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReactionRoles.
     */
    distinct?: ReactionRoleScalarFieldEnum | ReactionRoleScalarFieldEnum[]
  }

  /**
   * ReactionRole findFirstOrThrow
   */
  export type ReactionRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReactionRole
     */
    select?: ReactionRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReactionRole
     */
    omit?: ReactionRoleOmit<ExtArgs> | null
    /**
     * Filter, which ReactionRole to fetch.
     */
    where?: ReactionRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReactionRoles to fetch.
     */
    orderBy?: ReactionRoleOrderByWithRelationInput | ReactionRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReactionRoles.
     */
    cursor?: ReactionRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReactionRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReactionRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReactionRoles.
     */
    distinct?: ReactionRoleScalarFieldEnum | ReactionRoleScalarFieldEnum[]
  }

  /**
   * ReactionRole findMany
   */
  export type ReactionRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReactionRole
     */
    select?: ReactionRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReactionRole
     */
    omit?: ReactionRoleOmit<ExtArgs> | null
    /**
     * Filter, which ReactionRoles to fetch.
     */
    where?: ReactionRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReactionRoles to fetch.
     */
    orderBy?: ReactionRoleOrderByWithRelationInput | ReactionRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReactionRoles.
     */
    cursor?: ReactionRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReactionRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReactionRoles.
     */
    skip?: number
    distinct?: ReactionRoleScalarFieldEnum | ReactionRoleScalarFieldEnum[]
  }

  /**
   * ReactionRole create
   */
  export type ReactionRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReactionRole
     */
    select?: ReactionRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReactionRole
     */
    omit?: ReactionRoleOmit<ExtArgs> | null
    /**
     * The data needed to create a ReactionRole.
     */
    data: XOR<ReactionRoleCreateInput, ReactionRoleUncheckedCreateInput>
  }

  /**
   * ReactionRole createMany
   */
  export type ReactionRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReactionRoles.
     */
    data: ReactionRoleCreateManyInput | ReactionRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReactionRole createManyAndReturn
   */
  export type ReactionRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReactionRole
     */
    select?: ReactionRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReactionRole
     */
    omit?: ReactionRoleOmit<ExtArgs> | null
    /**
     * The data used to create many ReactionRoles.
     */
    data: ReactionRoleCreateManyInput | ReactionRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReactionRole update
   */
  export type ReactionRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReactionRole
     */
    select?: ReactionRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReactionRole
     */
    omit?: ReactionRoleOmit<ExtArgs> | null
    /**
     * The data needed to update a ReactionRole.
     */
    data: XOR<ReactionRoleUpdateInput, ReactionRoleUncheckedUpdateInput>
    /**
     * Choose, which ReactionRole to update.
     */
    where: ReactionRoleWhereUniqueInput
  }

  /**
   * ReactionRole updateMany
   */
  export type ReactionRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReactionRoles.
     */
    data: XOR<ReactionRoleUpdateManyMutationInput, ReactionRoleUncheckedUpdateManyInput>
    /**
     * Filter which ReactionRoles to update
     */
    where?: ReactionRoleWhereInput
    /**
     * Limit how many ReactionRoles to update.
     */
    limit?: number
  }

  /**
   * ReactionRole updateManyAndReturn
   */
  export type ReactionRoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReactionRole
     */
    select?: ReactionRoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReactionRole
     */
    omit?: ReactionRoleOmit<ExtArgs> | null
    /**
     * The data used to update ReactionRoles.
     */
    data: XOR<ReactionRoleUpdateManyMutationInput, ReactionRoleUncheckedUpdateManyInput>
    /**
     * Filter which ReactionRoles to update
     */
    where?: ReactionRoleWhereInput
    /**
     * Limit how many ReactionRoles to update.
     */
    limit?: number
  }

  /**
   * ReactionRole upsert
   */
  export type ReactionRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReactionRole
     */
    select?: ReactionRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReactionRole
     */
    omit?: ReactionRoleOmit<ExtArgs> | null
    /**
     * The filter to search for the ReactionRole to update in case it exists.
     */
    where: ReactionRoleWhereUniqueInput
    /**
     * In case the ReactionRole found by the `where` argument doesn't exist, create a new ReactionRole with this data.
     */
    create: XOR<ReactionRoleCreateInput, ReactionRoleUncheckedCreateInput>
    /**
     * In case the ReactionRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReactionRoleUpdateInput, ReactionRoleUncheckedUpdateInput>
  }

  /**
   * ReactionRole delete
   */
  export type ReactionRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReactionRole
     */
    select?: ReactionRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReactionRole
     */
    omit?: ReactionRoleOmit<ExtArgs> | null
    /**
     * Filter which ReactionRole to delete.
     */
    where: ReactionRoleWhereUniqueInput
  }

  /**
   * ReactionRole deleteMany
   */
  export type ReactionRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReactionRoles to delete
     */
    where?: ReactionRoleWhereInput
    /**
     * Limit how many ReactionRoles to delete.
     */
    limit?: number
  }

  /**
   * ReactionRole without action
   */
  export type ReactionRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReactionRole
     */
    select?: ReactionRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReactionRole
     */
    omit?: ReactionRoleOmit<ExtArgs> | null
  }


  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketAvgAggregateOutputType = {
    id: number | null
  }

  export type TicketSumAggregateOutputType = {
    id: number | null
  }

  export type TicketMinAggregateOutputType = {
    id: number | null
    guildId: string | null
    userId: string | null
    channelId: string | null
    subject: string | null
    openedAt: Date | null
  }

  export type TicketMaxAggregateOutputType = {
    id: number | null
    guildId: string | null
    userId: string | null
    channelId: string | null
    subject: string | null
    openedAt: Date | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    guildId: number
    userId: number
    channelId: number
    subject: number
    openedAt: number
    _all: number
  }


  export type TicketAvgAggregateInputType = {
    id?: true
  }

  export type TicketSumAggregateInputType = {
    id?: true
  }

  export type TicketMinAggregateInputType = {
    id?: true
    guildId?: true
    userId?: true
    channelId?: true
    subject?: true
    openedAt?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    guildId?: true
    userId?: true
    channelId?: true
    subject?: true
    openedAt?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    guildId?: true
    userId?: true
    channelId?: true
    subject?: true
    openedAt?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _avg?: TicketAvgAggregateInputType
    _sum?: TicketSumAggregateInputType
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: number
    guildId: string
    userId: string
    channelId: string
    subject: string
    openedAt: Date
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    userId?: boolean
    channelId?: boolean
    subject?: boolean
    openedAt?: boolean
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    userId?: boolean
    channelId?: boolean
    subject?: boolean
    openedAt?: boolean
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    userId?: boolean
    channelId?: boolean
    subject?: boolean
    openedAt?: boolean
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectScalar = {
    id?: boolean
    guildId?: boolean
    userId?: boolean
    channelId?: boolean
    subject?: boolean
    openedAt?: boolean
  }

  export type TicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guildId" | "userId" | "channelId" | "subject" | "openedAt", ExtArgs["result"]["ticket"]>

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      guildId: string
      userId: string
      channelId: string
      subject: string
      openedAt: Date
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketFindUniqueArgs>(args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketFindFirstArgs>(args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketFindManyArgs>(args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends TicketCreateArgs>(args: SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCreateManyArgs>(args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickets and returns the data saved in the database.
     * @param {TicketCreateManyAndReturnArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends TicketDeleteArgs>(args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketUpdateArgs>(args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketDeleteManyArgs>(args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketUpdateManyArgs>(args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets and returns the data updated in the database.
     * @param {TicketUpdateManyAndReturnArgs} args - Arguments to update many Tickets.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends TicketUpsertArgs>(args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ticket model
   */
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'Int'>
    readonly guildId: FieldRef<"Ticket", 'String'>
    readonly userId: FieldRef<"Ticket", 'String'>
    readonly channelId: FieldRef<"Ticket", 'String'>
    readonly subject: FieldRef<"Ticket", 'String'>
    readonly openedAt: FieldRef<"Ticket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ticket createManyAndReturn
   */
  export type TicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
  }

  /**
   * Ticket updateManyAndReturn
   */
  export type TicketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to delete.
     */
    limit?: number
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const GuildConfigScalarFieldEnum: {
    guildId: 'guildId',
    prefix: 'prefix',
    staffRoleId: 'staffRoleId',
    logChannelId: 'logChannelId',
    language: 'language',
    welcomeChannelId: 'welcomeChannelId',
    welcomeMessage: 'welcomeMessage',
    goodbyeChannelId: 'goodbyeChannelId',
    goodbyeMessage: 'goodbyeMessage',
    autoRoleId: 'autoRoleId',
    disabledCommands: 'disabledCommands'
  };

  export type GuildConfigScalarFieldEnum = (typeof GuildConfigScalarFieldEnum)[keyof typeof GuildConfigScalarFieldEnum]


  export const ReactionRoleScalarFieldEnum: {
    id: 'id',
    guildId: 'guildId',
    messageId: 'messageId',
    emoji: 'emoji',
    roleId: 'roleId'
  };

  export type ReactionRoleScalarFieldEnum = (typeof ReactionRoleScalarFieldEnum)[keyof typeof ReactionRoleScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    guildId: 'guildId',
    userId: 'userId',
    channelId: 'channelId',
    subject: 'subject',
    openedAt: 'openedAt'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type GuildConfigWhereInput = {
    AND?: GuildConfigWhereInput | GuildConfigWhereInput[]
    OR?: GuildConfigWhereInput[]
    NOT?: GuildConfigWhereInput | GuildConfigWhereInput[]
    guildId?: StringFilter<"GuildConfig"> | string
    prefix?: StringFilter<"GuildConfig"> | string
    staffRoleId?: StringNullableFilter<"GuildConfig"> | string | null
    logChannelId?: StringNullableFilter<"GuildConfig"> | string | null
    language?: StringFilter<"GuildConfig"> | string
    welcomeChannelId?: StringNullableFilter<"GuildConfig"> | string | null
    welcomeMessage?: StringNullableFilter<"GuildConfig"> | string | null
    goodbyeChannelId?: StringNullableFilter<"GuildConfig"> | string | null
    goodbyeMessage?: StringNullableFilter<"GuildConfig"> | string | null
    autoRoleId?: StringNullableFilter<"GuildConfig"> | string | null
    disabledCommands?: StringNullableListFilter<"GuildConfig">
  }

  export type GuildConfigOrderByWithRelationInput = {
    guildId?: SortOrder
    prefix?: SortOrder
    staffRoleId?: SortOrderInput | SortOrder
    logChannelId?: SortOrderInput | SortOrder
    language?: SortOrder
    welcomeChannelId?: SortOrderInput | SortOrder
    welcomeMessage?: SortOrderInput | SortOrder
    goodbyeChannelId?: SortOrderInput | SortOrder
    goodbyeMessage?: SortOrderInput | SortOrder
    autoRoleId?: SortOrderInput | SortOrder
    disabledCommands?: SortOrder
  }

  export type GuildConfigWhereUniqueInput = Prisma.AtLeast<{
    guildId?: string
    AND?: GuildConfigWhereInput | GuildConfigWhereInput[]
    OR?: GuildConfigWhereInput[]
    NOT?: GuildConfigWhereInput | GuildConfigWhereInput[]
    prefix?: StringFilter<"GuildConfig"> | string
    staffRoleId?: StringNullableFilter<"GuildConfig"> | string | null
    logChannelId?: StringNullableFilter<"GuildConfig"> | string | null
    language?: StringFilter<"GuildConfig"> | string
    welcomeChannelId?: StringNullableFilter<"GuildConfig"> | string | null
    welcomeMessage?: StringNullableFilter<"GuildConfig"> | string | null
    goodbyeChannelId?: StringNullableFilter<"GuildConfig"> | string | null
    goodbyeMessage?: StringNullableFilter<"GuildConfig"> | string | null
    autoRoleId?: StringNullableFilter<"GuildConfig"> | string | null
    disabledCommands?: StringNullableListFilter<"GuildConfig">
  }, "guildId">

  export type GuildConfigOrderByWithAggregationInput = {
    guildId?: SortOrder
    prefix?: SortOrder
    staffRoleId?: SortOrderInput | SortOrder
    logChannelId?: SortOrderInput | SortOrder
    language?: SortOrder
    welcomeChannelId?: SortOrderInput | SortOrder
    welcomeMessage?: SortOrderInput | SortOrder
    goodbyeChannelId?: SortOrderInput | SortOrder
    goodbyeMessage?: SortOrderInput | SortOrder
    autoRoleId?: SortOrderInput | SortOrder
    disabledCommands?: SortOrder
    _count?: GuildConfigCountOrderByAggregateInput
    _max?: GuildConfigMaxOrderByAggregateInput
    _min?: GuildConfigMinOrderByAggregateInput
  }

  export type GuildConfigScalarWhereWithAggregatesInput = {
    AND?: GuildConfigScalarWhereWithAggregatesInput | GuildConfigScalarWhereWithAggregatesInput[]
    OR?: GuildConfigScalarWhereWithAggregatesInput[]
    NOT?: GuildConfigScalarWhereWithAggregatesInput | GuildConfigScalarWhereWithAggregatesInput[]
    guildId?: StringWithAggregatesFilter<"GuildConfig"> | string
    prefix?: StringWithAggregatesFilter<"GuildConfig"> | string
    staffRoleId?: StringNullableWithAggregatesFilter<"GuildConfig"> | string | null
    logChannelId?: StringNullableWithAggregatesFilter<"GuildConfig"> | string | null
    language?: StringWithAggregatesFilter<"GuildConfig"> | string
    welcomeChannelId?: StringNullableWithAggregatesFilter<"GuildConfig"> | string | null
    welcomeMessage?: StringNullableWithAggregatesFilter<"GuildConfig"> | string | null
    goodbyeChannelId?: StringNullableWithAggregatesFilter<"GuildConfig"> | string | null
    goodbyeMessage?: StringNullableWithAggregatesFilter<"GuildConfig"> | string | null
    autoRoleId?: StringNullableWithAggregatesFilter<"GuildConfig"> | string | null
    disabledCommands?: StringNullableListFilter<"GuildConfig">
  }

  export type ReactionRoleWhereInput = {
    AND?: ReactionRoleWhereInput | ReactionRoleWhereInput[]
    OR?: ReactionRoleWhereInput[]
    NOT?: ReactionRoleWhereInput | ReactionRoleWhereInput[]
    id?: IntFilter<"ReactionRole"> | number
    guildId?: StringFilter<"ReactionRole"> | string
    messageId?: StringFilter<"ReactionRole"> | string
    emoji?: StringFilter<"ReactionRole"> | string
    roleId?: StringFilter<"ReactionRole"> | string
  }

  export type ReactionRoleOrderByWithRelationInput = {
    id?: SortOrder
    guildId?: SortOrder
    messageId?: SortOrder
    emoji?: SortOrder
    roleId?: SortOrder
  }

  export type ReactionRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    guildId_messageId_emoji?: ReactionRoleGuildIdMessageIdEmojiCompoundUniqueInput
    AND?: ReactionRoleWhereInput | ReactionRoleWhereInput[]
    OR?: ReactionRoleWhereInput[]
    NOT?: ReactionRoleWhereInput | ReactionRoleWhereInput[]
    guildId?: StringFilter<"ReactionRole"> | string
    messageId?: StringFilter<"ReactionRole"> | string
    emoji?: StringFilter<"ReactionRole"> | string
    roleId?: StringFilter<"ReactionRole"> | string
  }, "id" | "guildId_messageId_emoji">

  export type ReactionRoleOrderByWithAggregationInput = {
    id?: SortOrder
    guildId?: SortOrder
    messageId?: SortOrder
    emoji?: SortOrder
    roleId?: SortOrder
    _count?: ReactionRoleCountOrderByAggregateInput
    _avg?: ReactionRoleAvgOrderByAggregateInput
    _max?: ReactionRoleMaxOrderByAggregateInput
    _min?: ReactionRoleMinOrderByAggregateInput
    _sum?: ReactionRoleSumOrderByAggregateInput
  }

  export type ReactionRoleScalarWhereWithAggregatesInput = {
    AND?: ReactionRoleScalarWhereWithAggregatesInput | ReactionRoleScalarWhereWithAggregatesInput[]
    OR?: ReactionRoleScalarWhereWithAggregatesInput[]
    NOT?: ReactionRoleScalarWhereWithAggregatesInput | ReactionRoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ReactionRole"> | number
    guildId?: StringWithAggregatesFilter<"ReactionRole"> | string
    messageId?: StringWithAggregatesFilter<"ReactionRole"> | string
    emoji?: StringWithAggregatesFilter<"ReactionRole"> | string
    roleId?: StringWithAggregatesFilter<"ReactionRole"> | string
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: IntFilter<"Ticket"> | number
    guildId?: StringFilter<"Ticket"> | string
    userId?: StringFilter<"Ticket"> | string
    channelId?: StringFilter<"Ticket"> | string
    subject?: StringFilter<"Ticket"> | string
    openedAt?: DateTimeFilter<"Ticket"> | Date | string
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    guildId?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    subject?: SortOrder
    openedAt?: SortOrder
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    guildId?: StringFilter<"Ticket"> | string
    userId?: StringFilter<"Ticket"> | string
    channelId?: StringFilter<"Ticket"> | string
    subject?: StringFilter<"Ticket"> | string
    openedAt?: DateTimeFilter<"Ticket"> | Date | string
  }, "id">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    guildId?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    subject?: SortOrder
    openedAt?: SortOrder
    _count?: TicketCountOrderByAggregateInput
    _avg?: TicketAvgOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
    _sum?: TicketSumOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ticket"> | number
    guildId?: StringWithAggregatesFilter<"Ticket"> | string
    userId?: StringWithAggregatesFilter<"Ticket"> | string
    channelId?: StringWithAggregatesFilter<"Ticket"> | string
    subject?: StringWithAggregatesFilter<"Ticket"> | string
    openedAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
  }

  export type GuildConfigCreateInput = {
    guildId: string
    prefix: string
    staffRoleId?: string | null
    logChannelId?: string | null
    language: string
    welcomeChannelId?: string | null
    welcomeMessage?: string | null
    goodbyeChannelId?: string | null
    goodbyeMessage?: string | null
    autoRoleId?: string | null
    disabledCommands?: GuildConfigCreatedisabledCommandsInput | string[]
  }

  export type GuildConfigUncheckedCreateInput = {
    guildId: string
    prefix: string
    staffRoleId?: string | null
    logChannelId?: string | null
    language: string
    welcomeChannelId?: string | null
    welcomeMessage?: string | null
    goodbyeChannelId?: string | null
    goodbyeMessage?: string | null
    autoRoleId?: string | null
    disabledCommands?: GuildConfigCreatedisabledCommandsInput | string[]
  }

  export type GuildConfigUpdateInput = {
    guildId?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    staffRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    logChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    welcomeChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    welcomeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    goodbyeChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    goodbyeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    autoRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    disabledCommands?: GuildConfigUpdatedisabledCommandsInput | string[]
  }

  export type GuildConfigUncheckedUpdateInput = {
    guildId?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    staffRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    logChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    welcomeChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    welcomeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    goodbyeChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    goodbyeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    autoRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    disabledCommands?: GuildConfigUpdatedisabledCommandsInput | string[]
  }

  export type GuildConfigCreateManyInput = {
    guildId: string
    prefix: string
    staffRoleId?: string | null
    logChannelId?: string | null
    language: string
    welcomeChannelId?: string | null
    welcomeMessage?: string | null
    goodbyeChannelId?: string | null
    goodbyeMessage?: string | null
    autoRoleId?: string | null
    disabledCommands?: GuildConfigCreatedisabledCommandsInput | string[]
  }

  export type GuildConfigUpdateManyMutationInput = {
    guildId?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    staffRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    logChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    welcomeChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    welcomeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    goodbyeChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    goodbyeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    autoRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    disabledCommands?: GuildConfigUpdatedisabledCommandsInput | string[]
  }

  export type GuildConfigUncheckedUpdateManyInput = {
    guildId?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    staffRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    logChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    welcomeChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    welcomeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    goodbyeChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    goodbyeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    autoRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    disabledCommands?: GuildConfigUpdatedisabledCommandsInput | string[]
  }

  export type ReactionRoleCreateInput = {
    guildId: string
    messageId: string
    emoji: string
    roleId: string
  }

  export type ReactionRoleUncheckedCreateInput = {
    id?: number
    guildId: string
    messageId: string
    emoji: string
    roleId: string
  }

  export type ReactionRoleUpdateInput = {
    guildId?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type ReactionRoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type ReactionRoleCreateManyInput = {
    id?: number
    guildId: string
    messageId: string
    emoji: string
    roleId: string
  }

  export type ReactionRoleUpdateManyMutationInput = {
    guildId?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type ReactionRoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type TicketCreateInput = {
    id: number
    guildId: string
    userId: string
    channelId: string
    subject: string
    openedAt: Date | string
  }

  export type TicketUncheckedCreateInput = {
    id: number
    guildId: string
    userId: string
    channelId: string
    subject: string
    openedAt: Date | string
  }

  export type TicketUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateManyInput = {
    id: number
    guildId: string
    userId: string
    channelId: string
    subject: string
    openedAt: Date | string
  }

  export type TicketUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GuildConfigCountOrderByAggregateInput = {
    guildId?: SortOrder
    prefix?: SortOrder
    staffRoleId?: SortOrder
    logChannelId?: SortOrder
    language?: SortOrder
    welcomeChannelId?: SortOrder
    welcomeMessage?: SortOrder
    goodbyeChannelId?: SortOrder
    goodbyeMessage?: SortOrder
    autoRoleId?: SortOrder
    disabledCommands?: SortOrder
  }

  export type GuildConfigMaxOrderByAggregateInput = {
    guildId?: SortOrder
    prefix?: SortOrder
    staffRoleId?: SortOrder
    logChannelId?: SortOrder
    language?: SortOrder
    welcomeChannelId?: SortOrder
    welcomeMessage?: SortOrder
    goodbyeChannelId?: SortOrder
    goodbyeMessage?: SortOrder
    autoRoleId?: SortOrder
  }

  export type GuildConfigMinOrderByAggregateInput = {
    guildId?: SortOrder
    prefix?: SortOrder
    staffRoleId?: SortOrder
    logChannelId?: SortOrder
    language?: SortOrder
    welcomeChannelId?: SortOrder
    welcomeMessage?: SortOrder
    goodbyeChannelId?: SortOrder
    goodbyeMessage?: SortOrder
    autoRoleId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ReactionRoleGuildIdMessageIdEmojiCompoundUniqueInput = {
    guildId: string
    messageId: string
    emoji: string
  }

  export type ReactionRoleCountOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    messageId?: SortOrder
    emoji?: SortOrder
    roleId?: SortOrder
  }

  export type ReactionRoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ReactionRoleMaxOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    messageId?: SortOrder
    emoji?: SortOrder
    roleId?: SortOrder
  }

  export type ReactionRoleMinOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    messageId?: SortOrder
    emoji?: SortOrder
    roleId?: SortOrder
  }

  export type ReactionRoleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    subject?: SortOrder
    openedAt?: SortOrder
  }

  export type TicketAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    subject?: SortOrder
    openedAt?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    subject?: SortOrder
    openedAt?: SortOrder
  }

  export type TicketSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type GuildConfigCreatedisabledCommandsInput = {
    set: string[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type GuildConfigUpdatedisabledCommandsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}