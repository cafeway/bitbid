<div class="container">
    <div class="row">
        <div class="col-xl-12">
            <div class="card">
                <div class="card-body">
                    <h5 class="header-title pb-3 mt-0">Track Your Investments</h5>
                    <div class="table-responsive">
                        <table class="table table-hover mb-0">
                            <thead>
                                <tr class="align-self-center">
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th>Timer</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="bid in bids" :key="bid.id">
                                    <td>{{bid.investment}}</td>
                                    <td v-if="bid.state == 'running'"><span class="badge badge-boxed badge-soft-warning">pending</span></td>
                                    <td v-else-if="bid.state =='matured'"><span class="badge badge-boxed badge-soft-running">matured</span></td>
                                    <td v-else><span class="badge badge-boxed badge-soft-primary">cashed out</span></td>
                                    <td>
                                    <vue-countdown-timer
      @start_callback="startCallBack(bid.id)"
      @end_callback="endCallBack(bid.id)"
      :start-time="bid.startdate"
      :end-time="bid.stopdate"
      :interval="1000"
      :start-label="'Until start:'"
      :end-label="''"
      label-position="begin"
      :end-text="'timer expired'"
      :day-txt="'D'"
      :hour-txt="'H'"
      :minutes-txt="'M'"
      :seconds-txt="'S'">
    </vue-countdown-timer>
                                    </td>
                                    <td v-if="bid.state == 'running'"><button class="btn btn-sm btn-default disabled"><strike>running</strike></button></td>
                                    <td v-else-if="bid.state == 'matured'" ><button  class="btn btn-sm btn-outline-success" @click="cashout(bid.id)">Cash-out</button></td>
                                     <td v-else><p class="alert alert-success" role="alert">Cashed out</p></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!--end table-responsive-->
                    <div class="pt-3 border-top text-right">
<!-- Modal -->
<div class="modal fade" id="withdraw" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Withdraw</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <input
        type="number"
        value="200"
        placeholder="amount"
        id="withdrawal"
        v-model="form.withdrawal"
        class="form-control"
        />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="withdraw()">Withdraw</button>
      </div>
    </div>
  </div>
</div>
<!-- Modal -->
<div class="modal fade" id="invest" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">WiseFoxes invest in Wise-fex.</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form v-if="Investment == 0">
  <div class="form-group">
    <input type="number" class="form-control" id="period"  readonly required autofocus  aria-describedby="emailHelp" placeholder="number of days" value="1">
  </div>
  <div class="form-group">
    <input type="number" required autofocus  class="form-control" id="investment" placeholder="amount">
  </div>
</form>
<div  v-else-if="Investment == 1" class="alert alert-warning" role="alert">
<h3>Your Investment Successfull...!</h3>
</div>
<div  v-else-if="Investment == 2" class="alert alert-warning" role="alert">
<h4>Bid Failed due to insufficient wallet_balance
<p><a href="https://ravesandbox.flutterwave.com/pay/bitbid">Kindly Top Here</a>Or Try Biding a smaller amount</p>
</h4>
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" @click="refresh()" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-outline-primary" @click="invest()">Invest</button>
      </div>
    </div>
  </div>
</div>

                    <!-- <a href="#" class="text-warning">View all <i class="fa fa-eye"></i></a> -->
                       <button class="btn btn-secondary" @click="logout()">
                       Logout
                       </button>
                       <button class="btn btn-secondary" data-toggle="modal" data-target="#invest">
                       Invest
                       <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cash" viewBox="0 0 16 16">
  <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
  <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z"/>
</svg>
                       </button>
                     <!-- <button type="button" class="btn btn-warning btn-md" @click="verify_trans()">
 Withdraw
</button> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>