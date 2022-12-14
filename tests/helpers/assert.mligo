let tx_failure (res : test_exec_result) : unit =
  let expected = Test.eval expected in
  match res with
      Success _ -> failwith "failed"
    | Fail (error) ->
        (match error with 
         Fail (Balance_too_low _err) -> failwith "balance too low"
        )

let tx_success (res : test_exec_result) =
  match res with
      Success (actual, _) -> assert (actual = expected)